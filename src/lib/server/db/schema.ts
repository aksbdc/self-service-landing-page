import { boolean, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
	eventID: serial('id').primaryKey(),
	title: varchar('title', { length: 255 }).notNull(),
	location: text('location'),
	programFormat: varchar('programFormat', { length: 255 }),
	hybridEvent: boolean('hybridEvent'),
	keyID: varchar('keyID', { length: 255 }).unique(),
});
