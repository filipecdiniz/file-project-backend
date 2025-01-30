import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableLogs1737991217274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            create table public.logs(
                id serial primary key,
                user_id int,
                file_id int,
                action text,
                date_action timestamp without time zone DEFAULT now() NOT NULL
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table public.logs;
        `)
    }

}
