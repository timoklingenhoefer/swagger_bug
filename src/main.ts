import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'node:fs';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder().build(),
  );
  writeFileSync(
    join(__dirname, '..', 'swagger.json'),
    JSON.stringify(document, null, 2),
  );

  await app.listen(3000);
}
bootstrap();
