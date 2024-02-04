import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CarsModule,
    MongooseModule.forRoot(
      'mongodb+srv://hiramdev:JXGkwinlRNvGZVzG@salfox.l4kzipg.mongodb.net/',
    ),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
