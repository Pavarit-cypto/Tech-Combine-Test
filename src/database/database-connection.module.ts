import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          autoLoadEntities: true,
          type: 'postgres',
          host: configService.get('POSTGRES_HOST'),
          port: +configService.get('POSTGRES_PORT'),
          database: configService.get('POSTGRES_DB'),
          username: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          logging: configService.get('database.logging') ?? false,
          retryDelay: configService.get('database.retryDelay') ?? 3000,
          retryAttempts: configService.get('database.retryAttempts') ?? 3,
          synchronize: false,
        } as TypeOrmModuleOptions;
      },
    }),
  ],
  providers: [],
})
export class DatabaseConnectionModule {}
