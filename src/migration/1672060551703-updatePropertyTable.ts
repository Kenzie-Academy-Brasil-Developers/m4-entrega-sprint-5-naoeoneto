import { MigrationInterface, QueryRunner } from "typeorm";

export class updatePropertyTable1672060551703 implements MigrationInterface {
    name = 'updatePropertyTable1672060551703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "value" numeric(12,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "value" integer NOT NULL`);
    }

}
