import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTables1672353526717 implements MigrationInterface {
    name = 'updateTables1672353526717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "propertiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_d2aaadae4891d84f218b160a914" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_d2aaadae4891d84f218b160a914"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "propertiesId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
