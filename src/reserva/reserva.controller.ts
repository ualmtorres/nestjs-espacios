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
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Reserva } from './entities/reserva.entity';

@Controller('reserva')
@ApiTags('reserva')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  create(@Body() createReservaDto: CreateReservaDto): Promise<Reserva> {
    return this.reservaService.create(createReservaDto);
  }

  @Get()
  findAll(): Promise<Reserva[]> {
    return this.reservaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Reserva> {
    return this.reservaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateReservaDto: UpdateReservaDto,
  ): Promise<Reserva> {
    return this.reservaService.update(+id, updateReservaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<any> {
    return this.reservaService.remove(+id);
  }
}
