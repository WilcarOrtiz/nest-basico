import { IsString } from 'class-validator';

export class CreateCarDto {
    // podemos mandar mensajs personalizados 
  @IsString()
  readonly model: string;

  @IsString()
  readonly brand: string;
}
