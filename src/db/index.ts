import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!); // Create Neon client
export const db = drizzle(sql);               // Pass client to drizzle
