import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from "dotenv"

dotenv.config()
@Module({
  imports: [
    CarsModule,
    MongooseModule.forRoot(process.env.URI),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
