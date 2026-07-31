export interface RazorpayOrder {
    id: string;
    entity: 'order';
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: string;
    receipt: string;
    offer_id: string | null;
    status: 'created' | 'attempted' | 'paid';
    attempts: number;
    created_at: number;
}

export interface RazorpayPayment {
    id: string;
    entity: 'payment';
    amount: number;
    currency: string;
    status:
    | 'created'
    | 'authorized'
    | 'captured'
    | 'failed'
    | 'refunded';

    order_id: string;

    invoice_id: string | null;

    international: boolean;

    method: string;

    amount_refunded: number;

    refund_status: string | null;

    captured: boolean;

    description: string | null;

    card_id: string | null;

    bank: string | null;

    wallet: string | null;

    vpa: string | null;

    email: string;

    contact: string;

    notes: Record<string, string>;

    fee: number | null;

    tax: number | null;

    error_code: string | null;

    error_description: string | null;

    created_at: number;
}