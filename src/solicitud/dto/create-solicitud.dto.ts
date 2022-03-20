import { ApiProperty } from '@nestjs/swagger';

export class CreateSolicitudDto {
  @ApiProperty({ example: 'Manuel Torres Gil' })
  nombre: string;

  @ApiProperty({ example: 'Profesor Titular de Universidad' })
  cargo: string;

  @ApiProperty({ example: 'Departamento de Informática' })
  unidad: string;

  @ApiProperty({ example: '84030' })
  telefono: string;

  @ApiProperty({ example: 'mtorres@ual.es' })
  email: string;

  @ApiProperty({ example: 'Docente' })
  tipo: string;

  @ApiProperty({ example: 'Taller Testing APIs NestJS' })
  nombreActividad: string;

  @ApiProperty({ example: '2022-03-14' })
  start: Date;

  @ApiProperty({ example: '2022-03-28' })
  end: Date;

  @ApiProperty({ example: 'Martes' })
  dia: string;

  @ApiProperty({ example: '10' })
  horaInicio: string;

  @ApiProperty({ example: '12' })
  horaFin: string;
}
