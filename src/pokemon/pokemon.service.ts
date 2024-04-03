import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PokemonService {

  constructor(private prisma: PrismaService){

  }

  create(createPokemonDto: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data:createPokemonDto
    })
  }

  findAll() {
    return this.prisma.pokemon.findMany();
  }

  findAllTypePokemon() {
    return this.prisma.typePokemon.findMany();
  }

  findOneTypePokemon(id:string) {
    return this.prisma.typePokemon.findMany({
      where: {tittle: id}
    });
  }


  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
