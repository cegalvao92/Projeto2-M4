/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';

@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  create(@Body() createSeguidoreDto: CreateSeguidoresDto) {
    return this.seguidoresService.createPrisma(createSeguidoreDto);
  }

  @Get()
  findAll() {
    return this.seguidoresService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguidoresDto: UpdateSeguidoresDto) {
    return this.seguidoresService.updatePrisma(+id, updateSeguidoresDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.removePrisma(+id);
  }
}
