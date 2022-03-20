import { PartialType } from '@nestjs/swagger';
import { CreateEspacioDto } from './create-espacio.dto';

export class UpdateEspacioDto extends PartialType(CreateEspacioDto) {}
