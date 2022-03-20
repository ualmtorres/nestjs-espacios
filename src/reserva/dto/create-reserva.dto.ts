import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @ApiProperty({ example: '09:00 - 12:00' })
  hora: string;

  @ApiProperty({ example: 'Reseva para ...' })
  descripcion: string;

  @ApiProperty({ example: 'Bases de datos' })
  asignatura: string;

  @ApiProperty({ example: 'Manuel Torres Gil' })
  profesor: string;

  @ApiProperty({ example: 1 })
  espacio: number;
}
