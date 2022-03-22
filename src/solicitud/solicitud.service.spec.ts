import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudService } from './solicitud.service';
import { Solicitud } from './entities/solicitud.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { SolicitudRepositoryMock } from './solicitud-repository-mock';

describe('SolicitudService', () => {
  let service: SolicitudService;
  const mockSolicitud: Solicitud = {
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SolicitudService,
        {
          provide: getRepositoryToken(Solicitud),
          useClass: SolicitudRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<SolicitudService>(SolicitudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a solicitud', async () => {
    const createSolicitudDto: CreateSolicitudDto = {
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

    expect(await service.create(createSolicitudDto)).toEqual({
      id: expect.any(Number),
      ...createSolicitudDto,
    });
  });

  it('should update a solicitud', async () => {
    const updateSolicitudDto: UpdateSolicitudDto = {
      nombre: 'John Smith',
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
    const solicitudId = 1;

    expect(await service.update(solicitudId, updateSolicitudDto)).toEqual({
      id: solicitudId,
      ...updateSolicitudDto,
    });
  });

  it('should find a solicitud', async () => {
    const solicitudId = 1;
    expect(await (await service.findOne(solicitudId)).id).toEqual(solicitudId);
  });

  it('should find all solicitudes', async () => {
    expect(await service.findAll()).toEqual([mockSolicitud]);
  });

  it('should delete a solicitud', async () => {
    expect(await service.remove(1)).toBeDefined;
  });
});
