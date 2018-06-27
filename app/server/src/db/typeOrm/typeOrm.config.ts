// Possibly remove in favor of docker env vars
import * as dotenv from 'dotenv';
dotenv.config();

export const typeOrmPostgresConfig = {
  type: 'postgres',
  host: process.env.TYPEORM_POSTGRES_HOST,
  port: process.env.TYPEORM_POSTGRES_PORT,
  username: process.env.TYPEORM_POSTGRES_USERNAME,
  password: process.env.TYPEORM_POSTGRES_PASSWORD,
  database: process.env.TYPEORM_POSTGRES_DATABASE,
  entities: [__dirname + '/dbModels/**/*.entity{.ts,.js}'],
  synchronize: process.env.TYPEORM_POSTGRES_SYNC === 'ON' ? true : false,
};
