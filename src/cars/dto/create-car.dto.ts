import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `the brand most be a cool string` })
  readonly brand: string;

  @IsString()
  @MinLength(10, { message: 'error, deben ser minimo 10 caracteres' })
  readonly model: string;
}
