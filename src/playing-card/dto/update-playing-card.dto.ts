import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayingCardDto } from './create-playing-card.dto';

export class UpdatePlayingCardDto extends PartialType(CreatePlayingCardDto) {}
