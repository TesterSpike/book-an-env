import { Generated } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

interface EnvironmentTable {
    name: string
}

interface frontendTable {
    id: Generated<string>
    envKey: string
    name: string
    url: string
}

interface userManagementTable {
    id: Generated<string>
    envKey: string
    name: string
    url: string
}

interface officeTable {
    name: string
    locale: string
    timezone: string
}

interface BookingDataTable {
    id: Generated<string>
    envKey: string
    bookedBy: string
    bookedFor: string
    bookedUntil: string
    isShareable: string
    notes: string
}

// Keys of this interface are table names.
export interface Database {
    environments: EnvironmentTable
    frontend: frontendTable
    userManagement: userManagementTable
    office: officeTable
    bookingData: BookingDataTable
}

export const db = createKysely<Database>()
export { sql } from 'kysely'