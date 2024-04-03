import { Test, TestingModule } from '@nestjs/testing';
import { PlayingCardController } from './playing-card.controller';
import { PlayingCardService } from './playing-card.service';

describe('PlayingCardController', () => {
  let controller: PlayingCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayingCardController],
      providers: [PlayingCardService],
    }).compile();

    controller = module.get<PlayingCardController>(PlayingCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
