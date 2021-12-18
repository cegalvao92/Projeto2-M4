import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Seguidores } from '@prisma/client';

@Injectable()
export class SeguidoresService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSeguidoresDto): Promise<Seguidores> {
    return await this.prisma.seguidores.create({ data });
  }

  findAll() {
    return `This action returns all seguidores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seguidor`;
  }

  update(id: number, updateSeguidoresDto: UpdateSeguidoresDto) {
    return `This action updates a #${id} seguidor`;
  }

  remove(id: number) {
    return `This action removes a #${id} seguidor`;
  }
}