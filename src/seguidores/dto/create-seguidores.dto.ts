/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguidoresDto {
  id: number;

  @IsNotEmpty()
  @IsInt()
  seguidoresid: number;
}
