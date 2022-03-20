import { Test, TestingModule } from '@nestjs/testing';
import { EspacioService } from './espacio.service';

describe('EspacioService', () => {
  let service: EspacioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspacioService],
    }).compile();

    service = module.get<EspacioService>(EspacioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
