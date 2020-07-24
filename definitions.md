# Api to ERP project

## tecnologies
  ### git
  - github
  ### deploy
  -AWS
  ### server
  - NestJS (with Typescript)
  - express (could be fastify)
  - TDD
  ### DB
  PostgreSQL
  ORM: typeORM

## Patterns
  - Controller files: UsersController.ts, ProductsController.ts
  - Models files: SystemLog.ts
    model: SystemLog
  - DB: 
    table: 
      * table names: system_logs, users, order_products
      * all have id as primary key with auto_increment
    columns: 
      * camelcase: companyName,
      * foreign key: use ORM default, would be CompanyId?!
    values: 
      * number only! (cnpj/cpf, phone, etc)
      * boolean: DataTypes.TINYINT(1),
    migrations names:
      * table-{tableName} -> to create a table
      * addColumn-{columnName}-{tableName}
      * changeColumn-{columnName}-{tableName}