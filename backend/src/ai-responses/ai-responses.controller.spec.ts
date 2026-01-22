import { Test, TestingModule } from '@nestjs/testing';
import { AiResponsesController } from './ai-responses.controller';

describe('AiResponsesController', () => {
  let controller: AiResponsesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiResponsesController],
    }).compile();

    controller = module.get<AiResponsesController>(AiResponsesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
