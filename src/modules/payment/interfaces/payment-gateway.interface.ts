export interface CreatePaymentOrderDto {
  amount: number;
  currency: string;
  receipt: string;
}

export interface VerifyPaymentDto {
  orderId: string;
  paymentId: string;
  signature: string;
}

export interface PaymentGateway {
  /**
   * Creates a payment order on the gateway.
   */
  createOrder(data: CreatePaymentOrderDto): Promise<unknown>;

  /**
   * Verifies payment signature.
   */
  verifyPayment(data: VerifyPaymentDto): boolean;

  /**
   * Fetches payment details.
   */
  getPayment(paymentId: string): Promise<unknown>;

  /**
   * Fetches order details.
   */
  getOrder(orderId: string): Promise<unknown>;

  /**
   * Refunds a payment.
   */
  refundPayment(paymentId: string, amount?: number): Promise<unknown>;
}
