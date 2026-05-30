import z from 'zod';
import 'dotenv/config';

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'production', 'teste']).default('dev'),
  PORT: z.coerce.number().default(3333)
});

//here we have to doing validation
const _env = envSchema.safeParse(process.env);

if(_env.success === false){
  console.error("Environment Variable Problem!", _env.error.format());
  throw new Error("Environment Variable Problem!");
}

export const env = _env.data;