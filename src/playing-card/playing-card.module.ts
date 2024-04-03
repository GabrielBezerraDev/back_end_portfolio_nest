import { Module } from '@nestjs/common';
import { PlayingCardService } from './playing-card.service';
import { PlayingCardController } from './playing-card.controller';

@Module({
  controllers: [PlayingCardController],
  providers: [PlayingCardService],
})
export class PlayingCardModule {}
