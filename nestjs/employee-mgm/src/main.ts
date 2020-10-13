import { NestFactory } from '@nestjs/core';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger';
import { AppModule } from './app.module';

/**
 * Bootstrap the nest-js application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Setup Documentation
  documentationSetup(app);

  await app.listen(4200);
}

/**
 * Add API documentation for API endPoints
 * 
 * @param app Nest Application
 */
function documentationSetup(app){
  const options = new DocumentBuilder()
  .setTitle('Training Tracker')
  .setDescription('The API for Training Tracker Application')
  .setVersion('0.2')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);
}

bootstrap();
