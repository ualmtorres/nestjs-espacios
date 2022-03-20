import { Solicitud } from './entities/solicitud.entity';
export class SolicitudRepositoryMock {
  save(solicitud: Solicitud): Promise<Solicitud> {
    return Promise.resolve({
      id: Math.random() * (1000 - 1) + 1,
      ...solicitud,
    });
  }

  findOne(id: number): Promise<Solicitud> {
    return Promise.resolve({
      id: id,
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
    });
  }
}
