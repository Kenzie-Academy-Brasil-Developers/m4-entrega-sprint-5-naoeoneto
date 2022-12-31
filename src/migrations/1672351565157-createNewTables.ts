import { MigrationInterface, QueryRunner } from "typeorm";

export class createNewTables1672351565157 implements MigrationInterface {
    name = 'createNewTables1672351565157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedulesToUsersAndProperties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_116e7df8fe1346bc78616e0dc8a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, "categoryId" uuid, CONSTRAINT "REL_2b2211958ef1f0e3c680339100" UNIQUE ("addressId"), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedulesToUsersAndProperties" ADD CONSTRAINT "FK_8bc63087dc90756e2a332943040" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedulesToUsersAndProperties" ADD CONSTRAINT "FK_f29b57c004ba3a181ad0f724e18" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "schedulesToUsersAndProperties" DROP CONSTRAINT "FK_f29b57c004ba3a181ad0f724e18"`);
        await queryRunner.query(`ALTER TABLE "schedulesToUsersAndProperties" DROP CONSTRAINT "FK_8bc63087dc90756e2a332943040"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`DROP TABLE "schedulesToUsersAndProperties"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
