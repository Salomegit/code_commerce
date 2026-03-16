import { z } from 'zod';

// Define environment variable schema using Zod
const envSchema = z.object({
  API_BASE_URL: z.string().url('❌ API_BASE_URL must be a valid URL'),
  API_VERSION: z.string().regex(/^v\d+$/, "❌ API_VERSION must be in the format 'v1', 'v2', etc."),
});

export type Env = z.infer<typeof envSchema>;

let rawEnv: Record<string, string | undefined> = {};

// Explicitly assign environment variables
if (typeof process !== 'undefined') {
  rawEnv = {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
  };
}

// Validate the environment variables
const parsed = envSchema.safeParse(rawEnv);

// Handle validation errors
if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.format());
  throw new Error('Invalid environment configuration');
}

// Export validated environment variables
export const env = parsed.data;