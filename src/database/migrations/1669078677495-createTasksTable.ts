import { MigrationInterface, QueryRunner, Table } from "typeorm";

// arquived?: boolean;

// @Column()
// randomColor?: number;

export class createTasksTable1669078386938 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          {
            name: "uid",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "detail",
            type: "varchar",
          },
          {
            name: "user_uid",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "arquived",
            type: "boolean",
            default: false,
          },
          {
            name: "randomColor",
            type: "numeric",
            default: 1,
          },
          {
            name: "created_at",
            type: "date",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "date",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_user_uid",
            columnNames: ["user_uid"],
            referencedTableName: "users",
            referencedColumnNames: ["uid"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tasks");
  }
}
