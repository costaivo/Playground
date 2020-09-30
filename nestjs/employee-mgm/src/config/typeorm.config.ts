
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sa123456#',
    database: 'training-Tracker',
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: true,
}