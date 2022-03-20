import { Module } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { SolicitudController } from './solicitud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitud } from './entities/solicitud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitud])],
  controllers: [SolicitudController],
  providers: [SolicitudService],
})
export class SolicitudModule {}
