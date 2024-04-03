import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { PlayingCardModule } from './playing-card/playing-card.module';

@Module({
  imports: [PrismaModule, PokemonModule, PlayingCardModule],
})
export class AppModule {}
