import './prestart';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'warn', 'error', 'debug'] });
  // Allow the frontend (and other origins) to access the API during development/deploy
  app.enableCors({ origin: true });
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3002);
}

bootstrap();
