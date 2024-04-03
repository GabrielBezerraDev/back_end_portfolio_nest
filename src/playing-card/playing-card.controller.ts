import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayingCardService } from './playing-card.service';
import { CreatePlayingCardDto } from './dto/create-playing-card.dto';
import { UpdatePlayingCardDto } from './dto/update-playing-card.dto';

@Controller('playing-card')
export class PlayingCardController {
  constructor(private readonly playingCardService: PlayingCardService) {}

  @Post('create')
  create(@Body() createPlayingCardDto: CreatePlayingCardDto) {
    return this.playingCardService.create(createPlayingCardDto);
  }

  @Get()
  findAll() {
    return this.playingCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playingCardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayingCardDto: UpdatePlayingCardDto) {
    return this.playingCardService.update(+id, updatePlayingCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playingCardService.remove(+id);
  }
}
