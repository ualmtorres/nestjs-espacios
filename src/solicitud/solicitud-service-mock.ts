import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { Solicitud } from './entities/solicitud.entity';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
export class SolicitudServiceMock {
  mockSolicitud: Solicitud = {
    id: 1,
    nombre: 'John Doe',
    cargo: 'Assistant Professor',
    unidad: 'Informatics Department',
    telefono: '1234',
    email: 'john.doe@gmail.com',
    tipo: '',
    nombreActividad: '',
    start: undefined,
    end: undefined,
    dia: '',
    horaInicio: '',
    horaFin: '',
  };

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

  async findOne(id: number): Promise<Solicitud> {
    this.mockSolicitud.id = id;
    return Promise.resolve(this.mockSolicitud);
  }

  async findAll(): Promise<Solicitud[]> {
    return Promise.resolve([this.mockSolicitud]);
  }

  async remove(id: number): Promise<any> {
    return Promise.resolve({
      raw: [],
      affected: 1,
    });
  }
}
