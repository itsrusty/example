import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Data, DataSchema } from './entities/data.entitie';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Data.name,
        schema: DataSchema,
      },
    ]),
  ],
})
export class CarsModule {}
