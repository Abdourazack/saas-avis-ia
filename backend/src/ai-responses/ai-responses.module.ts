import { Module } from '@nestjs/common';
import { AiResponsesController } from './ai-responses.controller';
import { AiResponsesService } from './ai-responses.service';

@Module({
  controllers: [AiResponsesController],
  providers: [AiResponsesService]
})
export class AiResponsesModule {}
