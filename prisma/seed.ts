// prisma/seed.ts
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '../src/generated/prisma/client';
import hsnData from './HSN_SAC_MASTER.json';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

async function main() {
  console.log(`Starting seed: ${hsnData.length} HSN & SAC codes...`);

  const BATCH_SIZE = 2000;
  for (let i = 0; i < hsnData.length; i += BATCH_SIZE) {
    const batch = hsnData.slice(i, i + BATCH_SIZE);
    await prisma.taxMaster.createMany({
      data: batch.map((item) => ({
        code: item.code,
        description: item.description,
        type: item.type,
        gstRate: item.gstRate,
      })),
      skipDuplicates: true,
    });
    console.log(
      `Inserted ${Math.min(i + BATCH_SIZE, hsnData.length)} / ${hsnData.length} records...`,
    );
  }

  console.log('Tax Master successfully seeded!');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
