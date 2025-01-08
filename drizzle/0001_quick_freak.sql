CREATE TABLE "authenticator"
(
    "credential_id"          text    NOT NULL,
    "user_id"                text    NOT NULL,
    "provider_account_id"    text    NOT NULL,
    "credential_public_key"  text    NOT NULL,
    "counter"                integer NOT NULL,
    "credential_device_type" text    NOT NULL,
    "credential_backed_up"   boolean NOT NULL,
    "transports"             text,
    CONSTRAINT "authenticator_credential_id_unique" UNIQUE ("credential_id")
);
--> statement-breakpoint
CREATE TABLE "session"
(
    "session_token" text PRIMARY KEY NOT NULL,
    "user_id"       text             NOT NULL,
    "expires"       timestamp        NOT NULL
);
--> statement-breakpoint
CREATE TABLE "verification_token"
(
    "identifier" text      NOT NULL,
    "token"      text      NOT NULL,
    "expires"    timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "authenticator"
    ADD CONSTRAINT "authenticator_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session"
    ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user" ("id") ON DELETE cascade ON UPDATE no action;