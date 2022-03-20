import { Reserva } from '../../reserva/entities/reserva.entity';
import { ApiProperty } from '@nestjs/swagger';
export class CreateEspacioDto {
  @ApiProperty({ example: 'Aulario II' })
  edificio: string;

  @ApiProperty({ example: 'Aula I' })
  aula: string;

  @ApiProperty({ example: '2022-03-16' })
  fecha: string;
}
