<<<<<<< HEAD
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguidoresDto {
@IsNotEmpty()
@IsInt()
idseguidor: number;

@IsNotEmpty()
@IsInt()
usuarioid: number;
=======
/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguidoresDto {
  id: number;

  @IsNotEmpty()
  @IsInt()
  seguidoresid: number;
>>>>>>> b777047bcec13cb449e13560006d3113f86dc692
}
