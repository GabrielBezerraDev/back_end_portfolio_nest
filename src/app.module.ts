import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PrismaModule, PokemonModule],
})
export class AppModule {}
