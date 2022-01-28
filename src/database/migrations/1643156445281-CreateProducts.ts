import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1643156445281 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "price",
            type: "number",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }


    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('products');
    }

}
