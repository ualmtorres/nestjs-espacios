import { Module } from '@nestjs/common';
import { EspacioService } from './espacio.service';
import { EspacioController } from './espacio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Espacio } from './entities/espacio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Espacio])],
  controllers: [EspacioController],
  providers: [EspacioService],
})
export class EspacioModule {}
