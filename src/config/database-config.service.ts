import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.configService.get(key);
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    this.ensureValues([
      'DATABASE_TYPE',
      'DATABASE_HOST',
      'DATABASE_PORT',
      'DATABASE_USER',
      'DATABASE_PASSWORD',
      'DATABASE_DATABASE',
    ]);

    return {
      type: this.getValue('DATABASE_TYPE') as any,
      host: this.getValue('DATABASE_HOST'),
      port: parseInt(this.getValue('DATABASE_PORT')),
      username: this.getValue('DATABASE_USER'),
      password: this.getValue('DATABASE_PASSWORD'),
      sid: this.getValue('DATABASE_DATABASE'),
      database: this.getValue('DATABASE_DATABASE'),
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
