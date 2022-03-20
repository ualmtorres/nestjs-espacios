import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { Solicitud } from './entities/solicitud.entity';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
export class SolicitudServiceMock {
  async create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud> {
    return Promise.resolve({
      id: Math.random() * (1000 - 1) + 1,
      ...createSolicitudDto,
    });
  }

  async update(
    id: number,
    updateSolicitudDto: UpdateSolicitudDto,
  ): Promise<Solicitud> {
    return Promise.resolve({
      id: id,
      ...updateSolicitudDto,
    }) as Promise<Solicitud>;
  }
}
