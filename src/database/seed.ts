import { db } from "./kysely";

export async function seed() {
    const createEnvTable = await db.schema
        .createTable('environments')
        .ifNotExists()
        .addColumn('name', 'varchar(255)', (cb) => cb.primaryKey())
        .addColumn('detail', 'varchar(255)', (cb) => cb.defaultTo(''))
        .execute()
    console.log(`Created "environments" table`)

    const addEnvs = await db
        .insertInto('environments')
        .values([
            {
                name: 'TST1'
            },
            {
                name: 'TST2'
            },
            {
                name: 'TST3'
            },
            {
                name: 'TST4'
            },
            {
                name: 'TST5'
            },
            {
                name: 'TST6'
            },
            {
                name: 'TST7'
            },
            {
                name: 'TST8'
            },
            {
                name: 'TST9'
            }
        ])
        .execute()
    console.log('Seeded database with 9 environments')

    const createFETable = await db.schema
        .createTable('frontend')
        .ifNotExists()
        .addColumn('id', 'serial', (cb) => cb.primaryKey())
        .addColumn('envKey', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('name', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('url', 'varchar(255)', (cb) => cb.notNull())
        .execute()
    console.log(`Created "frontend" table`)

    const addFE = await db
        .insertInto('frontend')
        .values([
            {
                envKey: 'TST1',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST2',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST3',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST4',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST5',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST6',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST7',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST8',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST9',
                name: 'FE1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST1',
                name: 'FE2',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST3',
                name: 'FE2',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST4',
                name: 'FE2',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST5',
                name: 'FE2',
                url: 'http://localhost:8080'
            }
        ])
        .execute()
    console.log('Seeded database with frontends for the 9 environments')

    const createUMTable = await db.schema
        .createTable('userManagement')
        .ifNotExists()
        .addColumn('id', 'serial', (cb) => cb.primaryKey())
        .addColumn('envKey', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('name', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('url', 'varchar(255)', (cb) => cb.notNull())
        .execute()
    console.log(`Created "frontend" table`)

    const addUM = await db
        .insertInto('userManagement')
        .values([
            {
                envKey: 'TST1',
                name: 'UM1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST2',
                name: 'UM1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST3',
                name: 'UM2',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST4',
                name: 'UM3',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST5',
                name: 'UM1',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST6',
                name: 'UM3',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST7',
                name: 'UM3',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST8',
                name: 'UM3',
                url: 'http://localhost:8080'
            },
            {
                envKey: 'TST9',
                name: 'UM2',
                url: 'http://localhost:8080'
            }
        ])
        .execute()
    console.log('Seeded database with user management for the 9 environments')

    const createOfficeTable = await db.schema
        .createTable('office')
        .ifNotExists()
        .addColumn('id', 'serial', (cb) => cb.primaryKey())
        .addColumn('envKey', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('bookedBy', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('office', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('bookedFor', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('bookedUntil', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('isShareable', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('notes', 'varchar(255)', (cb) => cb.notNull())
        .execute()

    console.log(`Created "office" table`)

    const addOffice = await db
        .insertInto('office')
        .values([
            {
                name: 'NYC',
                locale: 'en-US',
                timezone: 'America/New_York',
            },
            {
                name: 'VAN',
                locale: 'en-CA',
                timezone: 'America/Vancouver',
            },
            {
                name: 'LDN',
                locale: 'en-GB',
                timezone: 'Europe/London',
            }
        ])
        .execute()
    console.log('Seeded database with user management for the 9 environments')

    const createBookingTable = await db.schema
        .createTable('bookingData')
        .ifNotExists()
        .addColumn('id', 'serial', (cb) => cb.primaryKey())
        .addColumn('envKey', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('bookedBy', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('office', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('bookedFor', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('bookedUntil', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('isShareable', 'varchar(255)', (cb) => cb.notNull())
        .addColumn('notes', 'varchar(255)', (cb) => cb.notNull())
        .execute()

    console.log(`Created "booking data" table`)

    return {
        createEnvTable,
        addEnvs,
        createFETable,
        addFE,
        createUMTable,
        addUM,
        createOfficeTable,
        addOffice,
        createBookingTable
    }
}