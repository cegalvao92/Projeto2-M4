import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguindoDto {
@IsNotEmpty()
@IsInt()
idseguindo: number;

@IsNotEmpty()
@IsInt()
usuarioid: number;
}
