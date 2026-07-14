import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.coerce.number().default(3000),
  APP_NAME: z.string(),
  DATABASE_URL: z.string().url().or(z.string().startsWith('postgresql://')),
  JWT_ACCESS_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  JWT_ACCESS_EXPIRES_IN: z.string(),
  JWT_REFRESH_EXPIRES_IN: z.string(),
});

export function validate(config: Record<string, unknown>) {
  return envSchema.parse(config);
}