const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// 1. Locate Excel Workbook
const excelFileName = fs.existsSync(path.join(__dirname, 'Approved Master Obpark Market Product List_2.xlsx'))
    ? 'Approved Master Obpark Market Product List_2.xlsx'
    : 'Approved Master Obpark Market Product List.xlsx';

const workbook = xlsx.readFile(path.join(__dirname, excelFileName));
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rawData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

// Output directory
const outputDir = path.join(__dirname, 'src', 'modules', 'products', 'data', 'categories');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Helpers for data transformation
const cleanNumber = (val) => {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    const str = String(val).replace(/₹|,/g, '').trim();
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
};

const cleanRating = (val) => {
    if (!val) return 0;
    const str = String(val).split('/')[0].trim();
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
};

const extractSlug = (url) => {
    if (!url) return '';
    const clean = String(url).trim().replace(/\/+$/, '');
    return clean.split('/').pop() || '';
};

const cleanFeatures = (val) => {
    if (!val) return [];
    return String(val)
        .split(';')
        .map((f) => f.trim())
        .filter(Boolean);
};

const cleanCoupon = (val) => {
    if (!val) return null;
    const str = String(val).trim();
    return str.toLowerCase().includes('no coupon') || str === '' ? null : str;
};

const toCamelCaseVar = (slug) => {
    return slug.replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase());
};

// 2. Identify Category Blocks
const categoryBlocks = [];
rawData.forEach((row, idx) => {
    const firstCol = String(row[0] || '');
    if (/^\d+\./.test(firstCol)) {
        categoryBlocks.push({ index: idx, title: firstCol });
    }
});

const generatedModules = [];

// 3. Process Each Category
categoryBlocks.forEach((block, i) => {
    const nextBlockIndex = categoryBlocks[i + 1] ? categoryBlocks[i + 1].index : rawData.length;
    const rawCatName = block.title.replace(/^\d+\.\s*/, '').trim();

    // Normalize Category Name & Slug
    const categoryName = rawCatName
        .replace('Electronics smart gagets', 'Electronics & Smart Gadgets')
        .replace('EV PRODUCTS', 'EV Products');

    const slug = categoryName
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

    const varName = toCamelCaseVar(slug);
    const items = [];

    // Rows start 2 rows after the header (skipping column labels)
    for (let r = block.index + 2; r < nextBlockIndex; r++) {
        const row = rawData[r];
        if (!row || !row[0] || isNaN(Number(row[0]))) continue;

        const productId = extractSlug(row[1]);

        const product = {
            id: Number(row[0]),
            productId: productId,
            productHeading: String(row[2] || '').trim(),
            productName: String(row[3] || '').trim(),
            productDescription: String(row[4] || '').trim(),
            productRating: cleanRating(row[5]),
            productFeatures: cleanFeatures(row[6]),
            productCost: cleanNumber(row[8]),
            platformCharges: cleanNumber(row[9]),
            gst: cleanNumber(row[10]),
            discountCoupon: cleanCoupon(row[12]),
            shippingInformation: String(row[13] || '').trim(),
            longDescription: String(row[14] || '').trim(),
            category: categoryName,
            images: [
                `/products/${slug}/${productId}/1.webp`,
                `/products/${slug}/${productId}/2.webp`,
                `/products/${slug}/${productId}/3.webp`,
                `/products/${slug}/${productId}/4.webp`,
            ],
        };

        items.push(product);
    }

    const fileData = {
        id: slug,
        categoryName: categoryName,
        slug: slug,
        items: items,
    };

    // 4. Write Individual Category TS File
    const fileContent = `import { CategoryProducts } from "../types";\n\nexport const ${varName}: CategoryProducts = ${JSON.stringify(fileData, null, 2)};\n`;
    const filePath = path.join(outputDir, `${slug}.ts`);
    fs.writeFileSync(filePath, fileContent, 'utf-8');

    generatedModules.push({ varName, slug });
    console.log(`Generated: ${slug}.ts (${items.length} products)`);
});

// 5. Generate Index Aggregator File (index.ts)
const importStatements = generatedModules
    .map((m) => `import { ${m.varName} } from "./${m.slug}";`)
    .join('\n');

const exportArray = generatedModules.map((m) => `  ${m.varName},`).join('\n');

const indexContent = `import { CategoryProducts } from "../types";\n${importStatements}\n\nexport const allCategories: CategoryProducts[] = [\n${exportArray}\n];\n`;

fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent, 'utf-8');
console.log('Generated: categories/index.ts (Aggregator)');