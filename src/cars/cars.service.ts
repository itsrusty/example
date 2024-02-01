import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'toshota',
      model: 'corolla',
    },

    {
      id: 2,
      brand: 'honda',
      model: 'civic',
    },
    {
      id: 3,
      brand: 'shipeta',
      model: 'cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`car with id ${id} not found`);

    return this.cars[id];
  }
}
