import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // Configurar títulos de documnentación
  const options = new DocumentBuilder()
    .setTitle('API de Espacios (Tutorial)')
    .setDescription('Documentación de la API de espacios para el tutorial')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  app.enableCors();

  const config: ConfigService = app.get<ConfigService>(ConfigService);

  await app.listen(config.get('port'));
}
bootstrap();
