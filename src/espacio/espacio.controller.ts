import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EspacioService } from './espacio.service';
import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Espacio } from './entities/espacio.entity';

@Controller('espacio')
@ApiTags('espacio')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
export class EspacioController {
  constructor(private readonly espacioService: EspacioService) {}

  @Post()
  create(@Body() createEspacioDto: CreateEspacioDto): Promise<Espacio> {
    return this.espacioService.create(createEspacioDto);
  }

  @Get()
  findAll(): Promise<Espacio[]> {
    return this.espacioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Espacio> {
    return this.espacioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEspacioDto: UpdateEspacioDto,
  ): Promise<Espacio> {
    return this.espacioService.update(+id, updateEspacioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.espacioService.remove(+id);
  }
}
