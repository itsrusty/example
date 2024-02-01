import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id) {
    return this.carsService.findOneById(id);
  }

  //   @Get(':id')
  //   getCarById( @Param('id') id ) {

  // asi tomamos los values por id, esto es equivalente al req.params de expressJS

  //     console.log(typeof id);

  //     if (id == typeof String && id > 2) {
  //         return 'no se puede'
  //     }

  //     return this.cars[id]
  //   }
}
