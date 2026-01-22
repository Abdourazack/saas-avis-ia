import { Test, TestingModule } from '@nestjs/testing';
import { AiResponsesService } from './ai-responses.service';

describe('AiResponsesService', () => {
  let service: AiResponsesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiResponsesService],
    }).compile();

    service = module.get<AiResponsesService>(AiResponsesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
