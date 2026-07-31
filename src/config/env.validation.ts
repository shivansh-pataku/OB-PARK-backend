import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.coerce.number().default(3000),
  APP_NAME: z.string(),
  DATABASE_URL: z.string().url().or(z.string().startsWith('postgresql://')),
  APP_URL: z.string().url(),

  JWT_ACCESS_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  JWT_ACCESS_EXPIRES_IN: z.string(),
  JWT_REFRESH_EXPIRES_IN: z.string(),

  FIREBASE_PROJECT_ID: z.string(),
  FIREBASE_CLIENT_EMAIL: z.string().email(),

  FIREBASE_PRIVATE_KEY: z.string(),
  SUREPASS_BASE_URL: z.string().url(),
  SUREPASS_TOKEN: z.string().min(1),

  PAYMENT_GATEWAY: z.string(),
  RAZORPAY_KEY_ID: z.string().min(1),
  RAZORPAY_KEY_SECRET: z.string().min(1),
  RAZORPAY_WEBHOOK_SECRET: z.string().min(1),
});

export function validate(config: Record<string, unknown>) {
  return envSchema.parse(config);
}