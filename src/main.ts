import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // recibe solo los datos que estén en el DTO
      forbidNonWhitelisted: true, // valida si se reciben los datos del DTO, si se envian otros, no los deja pasar
    }),
  );
  await app.listen(4000);
}
bootstrap();
