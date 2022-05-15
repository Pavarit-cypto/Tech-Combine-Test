import {MigrationInterface, QueryRunner} from "typeorm";

export class alterColumn1652539943159 implements MigrationInterface {
    name = 'alterColumn1652539943159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note_entity" ADD "tags" text array`);
        await queryRunner.query(`ALTER TABLE "note_entity" ALTER COLUMN "title" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note_entity" ALTER COLUMN "content" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note_entity" ALTER COLUMN "content" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note_entity" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "note_entity" DROP COLUMN "tags"`);
    }

}
