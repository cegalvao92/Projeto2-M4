/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';

@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
<<<<<<< HEAD
  create(@Body() createSeguidoresDto: CreateSeguidoresDto) {
    return this.seguidoresService.create(createSeguidoresDto);
=======
  create(@Body() createSeguidoreDto: CreateSeguidoresDto) {
    return this.seguidoresService.createPrisma(createSeguidoreDto);
>>>>>>> b777047bcec13cb449e13560006d3113f86dc692
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
<<<<<<< HEAD
    return this.seguidoresService.update(+id, updateSeguidoresDto);
=======
    return this.seguidoresService.updatePrisma(+id, updateSeguidoresDto);
>>>>>>> b777047bcec13cb449e13560006d3113f86dc692
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.removePrisma(+id);
  }
}
