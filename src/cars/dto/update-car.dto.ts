import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string; // poner el "?" signfica que es opcional de recibir

  @IsOptional()
  @IsString({ message: `the brand most be a cool string` })
  readonly brand?: string;

  @IsOptional()
  @IsString()
  // @MinLength(10, { message: 'error, deben ser minimo 10 caracteres' })
  readonly model?: string;
}
