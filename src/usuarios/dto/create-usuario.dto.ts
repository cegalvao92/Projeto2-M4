import { IsNotEmpty, IsDate, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    imagem: string;

    @IsNotEmpty()
    @IsString()
    bio: string;

    @IsNotEmpty()
    @IsString()
    nascimento: string;

    @IsNotEmpty()
    @IsDate()
    criado_em: Date;

    @IsNotEmpty()
    @IsDate()
    modificado_em: Date;

    @IsNumber()
    seguidoresid: Number;

    @IsNumber()
    seguindoid: Number;

    @IsNumber()
    tweetid: number;

}
