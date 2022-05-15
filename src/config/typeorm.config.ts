import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: process.env.POSTGRES_DB,
  entities: ["dist/**/*.entity.ts"],
  migrationsRun: false,
  logging: false,
  migrationsTableName: 'migration',
  migrations: [path.resolve('src/database/migrations/*{.ts,.js}')],
  synchronize: false,
  cli: {
    entitiesDir: path.resolve('src/database/entities'),
    migrationsDir: path.resolve('src/database/migrations'),
  },
};

export = typeOrmConfig;
