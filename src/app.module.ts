import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { DatabaseConfigService } from './config/database-config.service';
import { EspacioModule } from './espacio/espacio.module';
import { ReservaModule } from './reserva/reserva.module';
import { SolicitudModule } from './solicitud/solicitud.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfigService,
    }),
    AuthModule,
    EspacioModule,
    ReservaModule,
    SolicitudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
