import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsDate()
    criado_em: Date;

}
