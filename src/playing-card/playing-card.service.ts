import { Injectable } from '@nestjs/common';
import { CreatePlayingCardDto } from './dto/create-playing-card.dto';
import { UpdatePlayingCardDto } from './dto/update-playing-card.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlayingCardService {

  constructor(private prismaService: PrismaService){}

  create(createPlayingCardDto: CreatePlayingCardDto) {
    return this.prismaService.cardGame.create(
      {
        data:createPlayingCardDto
      }
    );
  }

  findAll() {
    return `This action returns all playingCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playingCard`;
  }

  update(id: number, updatePlayingCardDto: UpdatePlayingCardDto) {
    return `This action updates a #${id} playingCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} playingCard`;
  }
}
