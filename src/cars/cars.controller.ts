import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['toshota', 'shipeta', 'hondota'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById( @Param('id') id ) { // asi tomamos los values por id, esto es equivalente al req.params de expressJS

    console.log(typeof id);
    
    if (id == typeof String && id > 2) {
        return 'no se puede'
    }
    
    return this.cars[id]
  }
}
