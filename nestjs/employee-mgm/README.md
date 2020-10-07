# Training Tacker  Application

## Adding API documentation

### Required Packages

``` bash
# using npm
npm install --save @nestjs/swagger swagger-ui-express

#using yarn
yarn add @nestjs/swagger swagger-ui-express
```

### Bootstrap

`main.ts` file
```typescript
    async function bootstrap() {
      const app = await NestFactory.create(AppModule);
      
      const options = new DocumentBuilder()
      .setTitle('Training Tracker')
      .setDescription('The API for Training Tracker Application')
      .setVersion('0.1')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

      await app.listen(4200);
    }
    bootstrap();

```


### Adding Annotations for DTO and entity for spitting documentation

`base-emplooyee.dto.ts` file
``` typescript
  
import { IsEnum, IsISO8601, IsNotEmpty, IsNumberString, IsOptional } from "class-validator";
import { Designation } from "../employee.entity";
import {ApiProperty} from '@nestjs/swagger';

export class BaseEmployeeDto{
    @ApiProperty()
    @IsNotEmpty()
    firstName:string;

    @ApiProperty({required:false})
    @IsOptional()
    middleName:string;

    @ApiProperty()
    @IsNotEmpty()
    lastName:string;

    @ApiProperty({required:false})
    @IsOptional()
    teamName:string;
    
    @ApiProperty({enum:Designation,default:Designation.JUNIOR_DEVELOPER})
    @IsEnum(Designation)
    designation:Designation;
    
    
    @ApiProperty()
    @IsISO8601()
    dateOfJoining:Date;
    
    @ApiProperty()
    @IsNumberString()
    mobileNumber:string;
    
    @ApiProperty()
    @IsNotEmpty()
    emailAddress:string;
}
```