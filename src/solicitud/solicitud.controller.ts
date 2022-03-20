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
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Solicitud } from './entities/solicitud.entity';

@Controller('solicitud')
@ApiTags('solicitud')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
export class SolicitudController {
  constructor(private readonly solicitudService: SolicitudService) {}

  @Post()
  create(@Body() createSolicitudDto: CreateSolicitudDto): Promise<Solicitud> {
    return this.solicitudService.create(createSolicitudDto);
  }

  @Get()
  findAll(): Promise<Solicitud[]> {
    return this.solicitudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Solicitud> {
    return this.solicitudService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSolicitudDto: UpdateSolicitudDto,
  ): Promise<Solicitud> {
    return this.solicitudService.update(+id, updateSolicitudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.solicitudService.remove(+id);
  }
}
