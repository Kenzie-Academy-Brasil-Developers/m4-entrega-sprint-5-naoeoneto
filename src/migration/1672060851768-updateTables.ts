import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTables1672060851768 implements MigrationInterface {
    name = 'updateTables1672060851768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "value" numeric(12,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "value" integer NOT NULL`);
    }

}
