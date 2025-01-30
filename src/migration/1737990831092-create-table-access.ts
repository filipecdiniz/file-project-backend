import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAccess1737990831092 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            create table public.access(
                id serial primary key,
                file_id int,
                user_id int,
                permission_type int,
                date_grant timestamp with time zone DEFAULT now() NOT NULL
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table public.access;    
        `)
    }

}
