<<<<<<< HEAD
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguindoDto {
@IsNotEmpty()
@IsInt()
idseguindo: number;

@IsNotEmpty()
@IsInt()
usuarioid: number;
}
=======
/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateSeguindoDto {
  id: number;

  @IsNotEmpty()
  @IsInt()
  seguindoid: number;

}

>>>>>>> b777047bcec13cb449e13560006d3113f86dc692
