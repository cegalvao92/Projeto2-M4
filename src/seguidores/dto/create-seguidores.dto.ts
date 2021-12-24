import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguidoresDto {
@IsNotEmpty()
@IsInt()
idseguidor: number;

@IsNotEmpty()
@IsInt()
usuarioid: number;
}
