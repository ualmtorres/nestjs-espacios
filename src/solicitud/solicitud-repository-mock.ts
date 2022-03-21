import { Solicitud } from './entities/solicitud.entity';
export class SolicitudRepositoryMock {
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
  save(solicitud: Solicitud): Promise<Solicitud> {
    return Promise.resolve(this.mockSolicitud);
  }

  findOne(id: number): Promise<Solicitud> {
    return Promise.resolve(this.mockSolicitud);
  }

  find(): Promise<Solicitud[]> {
    return Promise.resolve([this.mockSolicitud]);
  }

  delete(id: number): Promise<any> {
    return Promise.resolve();
  }
}
