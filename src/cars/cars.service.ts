import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
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
}
