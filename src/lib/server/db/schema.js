import { pgTable, serial, integer } from 'drizzle-orm/pg-core';

export const workshop = pgTable('workshop', {
	id: serial('id').primaryKey(),
});
