CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"location" text,
	"programFormat" varchar(255),
	"hybridEvent" boolean,
	"keyID" varchar(255),
	CONSTRAINT "events_keyID_unique" UNIQUE("keyID")
);
