import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';
import { Espacio } from './entities/espacio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EspacioService {
  constructor(
    @InjectRepository(Espacio) private espacioRepository: Repository<Espacio>,
  ) {}
  async create(createEspacioDto: CreateEspacioDto): Promise<Espacio> {
    return await this.espacioRepository.save(createEspacioDto);
  }

  async findAll(): Promise<Espacio[]> {
    return await this.espacioRepository.find();
  }

  async findOne(id: number): Promise<Espacio> {
    return await this.espacioRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateEspacioDto: UpdateEspacioDto,
  ): Promise<Espacio> {
    let toUpdate = await this.espacioRepository.findOne(id);

    let updated = Object.assign(toUpdate, updateEspacioDto);

    return this.espacioRepository.save(updated);
  }

  async remove(id: number): Promise<any> {
    return await this.espacioRepository.delete({ id });
  }
}
