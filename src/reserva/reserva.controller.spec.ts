import { Test, TestingModule } from '@nestjs/testing';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';

describe('ReservaController', () => {
  let controller: ReservaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservaController],
      providers: [ReservaService],
    }).compile();

    controller = module.get<ReservaController>(ReservaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
