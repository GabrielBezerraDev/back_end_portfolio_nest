import { Test, TestingModule } from '@nestjs/testing';
import { PlayingCardService } from './playing-card.service';

describe('PlayingCardService', () => {
  let service: PlayingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayingCardService],
    }).compile();

    service = module.get<PlayingCardService>(PlayingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
