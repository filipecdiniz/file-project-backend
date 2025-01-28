import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableLoginToken1738007797546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            create table login_token (
                id serial primary key,
                user_id int,
                code text,
                expires date,
                used boolean
                created_at date
            );

            ALTER TABLE login_token
            ADD CONSTRAINT  fk_user_logintoken FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE login_token
            DROP CONSTRAINT fk_user_logintoken;

            DROP TABLE login_token;
        `)
    }

}
