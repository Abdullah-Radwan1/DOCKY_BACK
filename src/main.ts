import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import dns from 'node:dns';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const cookieParser = require('cookie-parser');

let cachedServer: any;

async function bootstrap() {
  if (cachedServer) return cachedServer;

  const app = await NestFactory.create(AppModule, { rawBody: true });

  dns.setDefaultResultOrder('ipv4first');

  app.use(cookieParser());

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Only listen on port if NOT running in Vercel environment
  if (!process.env.VERCEL) {
    await app.listen(process.env.PORT ?? 3000);
    console.log(
      `🚀 Backend running on http://localhost:${process.env.PORT ?? 3000}`,
    );
  } else {
    await app.init();
    cachedServer = app.getHttpAdapter().getInstance();
  }

  return cachedServer;
}

// Local execution
if (!process.env.VERCEL) {
  bootstrap();
}

// Vercel serverless export
export default async (req: any, res: any) => {
  const server = await bootstrap();
  return server(req, res);
};
