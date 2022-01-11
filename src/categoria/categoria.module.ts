import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[PrismaModule,PassportModule],
  controllers: [CategoriaController],
  providers: [CategoriaService]
})
export class CategoriaModule {}
