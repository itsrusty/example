import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Data } from './dto/data.dto';
import { Model, Schema } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DataS } from './entities/data.entitie';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(DataS.name)
    private readonly dataModel: Model<DataS>,
  ) {}

  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'toshota',
      model: 'corolla',
    },

    {
      id: uuid(),
      brand: 'honda',
      model: 'civic',
    },
    {
      id: uuid(),
      brand: 'shipeta',
      model: 'cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`car with id ${id} not found`);

    return this.cars[id];
  }

  create({ model, brand }: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      brand: brand,
      model: model,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }

      return car;
    });

    return carDB; //carro actualizado
  }

  delete(id: string) {
    let car = this.findOneById(id);

    this.cars = this.cars.filter((cars) => cars.id !== id);

    return;
  }

  async createInDB(data: Data) {
    data.name = data.name.toLocaleLowerCase();
    try {
      const dataSend = await this.dataModel.create(data);

      return dataSend;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `data sender exists in db ${JSON.stringify(error.keyValue)}`,
        );
      }
      console.log(error);
      throw new InternalServerErrorException(`can't create data, so sorry`);
    }
  }
}
