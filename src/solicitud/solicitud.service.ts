import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { Solicitud } from './entities/solicitud.entity';

@Injectable()
export class SolicitudService {
  constructor(
    @InjectRepository(Solicitud)
    private solicitudRepository: Repository<Solicitud>,
  ) {}
  async create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud> {
    return await this.solicitudRepository.save(createSolicitudDto);
  }

  async findAll(): Promise<Solicitud[]> {
    return await this.solicitudRepository.find();
  }

  async findOne(id: number): Promise<Solicitud> {
    return await this.solicitudRepository.findOne(id);
  }

  async update(
    id: number,
    updateSolicitudDto: UpdateSolicitudDto,
  ): Promise<Solicitud> {
    let toUpdate = await this.solicitudRepository.findOne(id);

    let updated = Object.assign(toUpdate, updateSolicitudDto);

    return this.solicitudRepository.save(updated);
  }

  async remove(id: number): Promise<any> {
    return await this.solicitudRepository.delete(id);
  }
}
