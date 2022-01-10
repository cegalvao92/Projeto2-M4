import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguindoDto {
@IsNotEmpty()
@IsInt()
@ApiProperty({
    example: '20',
    description: `Informar o numero do usuário que está seguindo`,
})
idseguindo: number;

@IsNotEmpty()
@IsInt()
usuarioid: number;

id: number;

@IsNotEmpty()
@IsInt()
seguindoid: number;

}

