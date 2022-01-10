import { ApiProperty } from "@nestjs/swagger";
import {IsInt , IsNotEmpty } from "class-validator";

export class CreateSeguidoresDto {
@IsNotEmpty()
@IsInt()
@ApiProperty({
    example: '10',
    description: `Informar o id do seguidor`,
})
idseguidor: number;

@IsNotEmpty()
@IsInt()
@ApiProperty({
    example: '20',
    description: `Informar o numero do usuário que será o seguidor`,
})
usuarioid: number;

id: number;

@IsNotEmpty()
@IsInt()
seguidoresid: number;

}
