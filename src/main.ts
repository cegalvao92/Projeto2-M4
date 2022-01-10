import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Projeto Rede Social')
    .setDescription(
      'O projeto consiste em criar uma API que servirá para controle do Twitter, onde o usuario postará tweets e terá seguidores',
    )
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}

bootstrap();