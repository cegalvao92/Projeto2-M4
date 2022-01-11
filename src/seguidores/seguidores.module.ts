import { Module } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { SeguidoresController } from './seguidores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,PassportModule],
  controllers: [SeguidoresController],
  providers: [SeguidoresService],
})
export class SeguidoresModule {}
