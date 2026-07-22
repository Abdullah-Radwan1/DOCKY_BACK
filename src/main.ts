import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import dns from 'node:dns';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });

  dns.setDefaultResultOrder('ipv4first');

  // Parse cookies so JwtStrategy can read req.cookies.jwt
  app.use(cookieParser());

  // Enable CORS for the frontend dev server with credentials (cookies)
  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `🚀 Backend running on http://localhost:${process.env.PORT ?? 3000}`,
  );
}
bootstrap();
