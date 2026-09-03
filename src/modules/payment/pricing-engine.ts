export interface PricingItemInput {
  product: any;
  quantity: number;
}

export interface PricingOptions {
  couponCode?: string;
  userAddress?: any;
  platformFee?: number;
  freeShippingThreshold?: number;
  defaultShippingCharge?: number;
}

export interface FormattedOrderItem {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  gstRate: number;
  gstAmount: number;
  hsnCode?: string;
}

export interface PricingResult {
  subtotal: number;
  tax: number;
  discount: number;
  shippingCharge: number;
  platformFee: number;
  totalAmount: number;
  orderItems: FormattedOrderItem[];
  isFreeShipping: boolean;
  amountNeededForFreeShipping: number;
  isPlatformFeeWaived: boolean;
}

/**
 * Centralized Pricing Engine
 * Calculates Subtotal, Tax (GST), Coupons, Shipping, Platform Fees, and Final Amount.
 */
export function pricingEngine(
  items: PricingItemInput[],
  options: PricingOptions = {},
): PricingResult {
  // THRESHOLD VALUES
  const WAIVE_OFF_SHIPPING_THRESHOLD = 1500;
  const WAIVE_OFF_PLATFORM_FEE_THRESHOLD = 1000;
  const SINGLE_PRODUCT_PLATFORM_FEE = 15;
  const MULTI_ITEM_PLATFORM_FEE = 10;

  let subtotal = 0;
  let totalTax = 0;
  const orderItems: FormattedOrderItem[] = [];

  for (const input of items) {
    const { product, quantity } = input;
    if (!product) continue;
    const qty = Math.max(1, quantity || 1);

    const unitPrice = Number(
      product.price ?? product.productCost ?? product.basePrice ?? 0,
    );
    const itemSubtotal = +(unitPrice * qty).toFixed(2);
    subtotal += itemSubtotal;

    // Calculate dynamic GST based on product's gstRate (defaults to 18%)
    const gstRate = Number(product.gstRate ?? 18);
    const itemGstAmount = +((itemSubtotal * gstRate) / 100).toFixed(2);
    totalTax += itemGstAmount;

    orderItems.push({
      productId: String(product.productId || product.id),
      productName: String(product.title || product.productName || 'Product'),
      productImage:
        product.imagePath ||
        (Array.isArray(product.images) && product.images[0]) ||
        '',
      quantity: qty,
      unitPrice,
      totalPrice: itemSubtotal,
      gstRate,
      gstAmount: itemGstAmount,
      hsnCode: product.hsnCode,
    });
  }

  // If subtotal is 0 or no items, return zeroed breakdown
  if (items.length === 0 || subtotal === 0) {
    return {
      subtotal: 0,
      tax: 0,
      discount: 0,
      shippingCharge: 0,
      platformFee: 0,
      totalAmount: 0,
      orderItems: [],
      isFreeShipping: true,
      amountNeededForFreeShipping: 0,
      isPlatformFeeWaived: true,
    };
  }

  // Coupon / Discount Logic
  let discount = 0;
  if (options.couponCode) {
    const code = options.couponCode.trim().toUpperCase();
    if (code === 'SAVE100') {
      discount = Math.min(100, subtotal);
    } else if (code === 'OBPARK10') {
      discount = +((subtotal * 0.1).toFixed(2));
    }
  }

  // Shipping Charges Logic
  const freeThreshold =
    options.freeShippingThreshold ?? WAIVE_OFF_SHIPPING_THRESHOLD;
  let shippingCharge = options.defaultShippingCharge ?? 0;
  if (
    options.defaultShippingCharge === undefined &&
    subtotal < freeThreshold
  ) {
    shippingCharge = 50; // Standard shipping fee under ₹1500
  } else if (subtotal >= freeThreshold) {
    shippingCharge = 0;
  }

  // Platform Charges Logic
  let platformFee = options.platformFee ?? 0;
  if (options.platformFee === undefined) {
    if (subtotal >= WAIVE_OFF_PLATFORM_FEE_THRESHOLD) {
      platformFee = 0;
    } else {
      platformFee =
        items.length === 1
          ? SINGLE_PRODUCT_PLATFORM_FEE
          : MULTI_ITEM_PLATFORM_FEE;
    }
  }

  // Final Net Payable Amount
  const totalAmount = +Math.max(
    0,
    subtotal - discount + totalTax + shippingCharge + platformFee,
  ).toFixed(2);

  return {
    subtotal: +subtotal.toFixed(2),
    tax: +totalTax.toFixed(2),
    discount: +discount.toFixed(2),
    shippingCharge: +shippingCharge.toFixed(2),
    platformFee: +platformFee.toFixed(2),
    totalAmount,
    orderItems,
    isFreeShipping: subtotal >= freeThreshold,
    amountNeededForFreeShipping: +Math.max(0, freeThreshold - subtotal).toFixed(2),
    isPlatformFeeWaived: subtotal >= WAIVE_OFF_PLATFORM_FEE_THRESHOLD,
  };
}
