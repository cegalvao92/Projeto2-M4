import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './prisma/prisma.module';
import { TweetModule } from './tweet/tweet.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FavoritoModule } from './favorito/favorito.module';

@Module({
  imports: [UsuariosModule, AuthModule, SeguidoresModule, SeguindoModule, TweetModule, PrismaModule, CategoriaModule, FavoritoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
