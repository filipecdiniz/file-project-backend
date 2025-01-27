import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelations1737997244474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            --File to User
            ALTER TABLE "file"
            ADD CONSTRAINT fk_file_owner FOREIGN KEY (owner_id) REFERENCES "user" (id) ON DELETE CASCADE;

            --Access To File
            --Access To User
            ALTER TABLE "access"
            ADD CONSTRAINT fk_access_file FOREIGN KEY (file_id) REFERENCES "file" (id) ON DELETE CASCADE,
            ADD CONSTRAINT fk_access_user FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE CASCADE;

            --Logs To User
            --Logs To File
            ALTER TABLE Logs
            ADD CONSTRAINT fk_logs_user FOREIGN KEY (user_id) REFERENCES "user" (id) ON DELETE SET NULL,
            ADD CONSTRAINT fk_logs_file FOREIGN KEY (file_id) REFERENCES "file" (id) ON DELETE CASCADE;

        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE Logs
            DROP CONSTRAINT fk_logs_user,
            DROP CONSTRAINT fk_logs_file;

            ALTER TABLE Access
            DROP CONSTRAINT fk_access_file,
            DROP CONSTRAINT fk_access_user;

            ALTER TABLE File
            DROP CONSTRAINT fk_file_owner;
        `)
    }

}
