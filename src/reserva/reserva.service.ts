import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva) private reservaRepository: Repository<Reserva>,
  ) {}
  create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    return this.reservaRepository.save(createReservaDto);
  }

  async findAll(): Promise<Reserva[]> {
    return await this.reservaRepository.find();
  }

  async findOne(id: number): Promise<Reserva> {
    return await this.reservaRepository.findOne(id);
  }

  async update(
    id: number,
    updateReservaDto: UpdateReservaDto,
  ): Promise<Reserva> {
    let toUpdate = await this.reservaRepository.findOne(id);

    let updated = Object.assign(toUpdate, updateReservaDto);

    return this.reservaRepository.save(updated);
  }

  async remove(id: number): Promise<any> {
    return await this.reservaRepository.delete(id);
  }
}
