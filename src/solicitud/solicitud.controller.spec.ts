import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudController } from './solicitud.controller';
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { of } from 'rxjs';
import { SolicitudServiceMock } from './solicitud-service-mock';
import { Solicitud } from './entities/solicitud.entity';

describe('SolicitudController', () => {
  let controller: SolicitudController;
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
    const SolicitudServiceProvider = {
      provide: SolicitudService,
      useClass: SolicitudServiceMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudController],
      providers: [SolicitudService, SolicitudServiceProvider],
    })
      .overrideProvider(SolicitudService)
      .useClass(SolicitudServiceMock)
      .compile();

    controller = module.get<SolicitudController>(SolicitudController);
    service = module.get<SolicitudService>(SolicitudService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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

    expect(await controller.create(createSolicitudDto)).toEqual({
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

    expect(await controller.update(solicitudId, updateSolicitudDto)).toEqual({
      id: solicitudId,
      ...updateSolicitudDto,
    });

    const updateSpy = jest.spyOn(service, 'update');
    controller.update(solicitudId, updateSolicitudDto);

    expect(updateSpy).toHaveBeenCalledWith(solicitudId, updateSolicitudDto);
  });

  it('should find a solicitud', async () => {
    const solicitudId = 2;
    expect(await (await controller.findOne(solicitudId)).id).toEqual(
      solicitudId,
    );
  });

  it('should find all solicitudes', async () => {
    expect(await controller.findAll()).toEqual([mockSolicitud]);
  });

  it('should delete a solicitud', async () => {
    expect((await controller.remove(1))['affected']).toEqual(1);
  });
});
