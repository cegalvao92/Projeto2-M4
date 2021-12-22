/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateSeguindoDto {
  id: number;

  @IsNotEmpty()
  @IsInt()
  seguindoid: number;

}

