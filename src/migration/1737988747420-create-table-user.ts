import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1737988747420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            create table public.User(
                id serial primary key,
                name text,
                email text,
                password text,
                picture_url text,
                created_at timestamp with time zone DEFAULT now() NOT NULL,
                updated_at timestamp with time zone DEFAULT now() NOT NULL
            );`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table public.user;`)
    }

}
