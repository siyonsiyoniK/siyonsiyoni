import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { migrate } from 'drizzle-orm/libsql/migrator';

// Initialize SQLite database
const client = createClient({
  url: 'file:local.db'
});

const db = drizzle(client, { schema });

// Run migrations
migrate(db, { migrationsFolder: './drizzle' });

export { db, client };

// Case related functions
export async function getCaseById(id: number) {
  return db.query.cases.findFirst({
    where: (cases, { eq }) => eq(cases.id, id)
  });
}

export async function getAllCases() {
  return db.query.cases.findMany();
}

export async function createCase(caseData: Omit<typeof schema.cases.$inferInsert, 'id' | 'createdAt' | 'modifiedAt'>) {
  return db.insert(schema.cases).values({
    ...caseData,
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString()
  }).returning();
}
