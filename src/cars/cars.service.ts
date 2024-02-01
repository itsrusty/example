import { Injectable } from '@nestjs/common';

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

  findOneById(id: number){
    return this.cars[id]
  }
}
