import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Tecnologia',
        description: `Nome do tipo de categoria para os tweets`,
    })
    nome: string;

    @IsNotEmpty()
    @IsDate()
    criado_em: Date;

}
