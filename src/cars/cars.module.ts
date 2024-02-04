import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DataS, DataSchema } from './entities/data.entitie';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: DataS.name,
        schema: DataSchema,
      },
    ]),
  ],
})
export class CarsModule {}
