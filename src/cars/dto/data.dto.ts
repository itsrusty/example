import { IsString, IsNumber, MinLength, IsPositive } from 'class-validator';

export class Data {
    @IsNumber()
    @IsPositive()
    // @MinLength(1)
    no: number;

    @IsString()
    name: string;
}