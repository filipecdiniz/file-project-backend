import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableFile1737989706532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            create table public.file(
                id serial primary key,
                name text,
                url text,
                type text,
                size numeric(8, 4),
                owner_id int,
                created_at timestamp with time zone DEFAULT now() NOT NULL
            );`
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table public."file";
        `)
    }

}
