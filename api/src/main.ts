import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Crm')
    .setDescription('The CRM API description')
    .setVersion('1.0')
    .addTag('crm')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger-ui', app, document);

  await app.listen(3333);
}
bootstrap();
