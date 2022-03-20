import { Test, TestingModule } from '@nestjs/testing';
import { EspacioController } from './espacio.controller';
import { EspacioService } from './espacio.service';

describe('EspacioController', () => {
  let controller: EspacioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspacioController],
      providers: [EspacioService],
    }).compile();

    controller = module.get<EspacioController>(EspacioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
