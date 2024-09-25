import { db } from "./kysely";

export async function unseed() {
    await db.schema.dropTable('bookingData').execute()
    await db.schema.dropTable('userManagement').execute()
    await db.schema.dropTable('frontend').execute()
    await db.schema.dropTable('environments').execute()
}