import { Module } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { SeguindoController } from './seguindo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,PassportModule],
  controllers: [SeguindoController],
  providers: [SeguindoService],
})
export class SeguindoModule {}
