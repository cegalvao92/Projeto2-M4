import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LoginDto {
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
    @IsString()
    senha: string;

    @IsNotEmpty()
    @IsDate()
    criado_em: Date;

    @IsNotEmpty()
    @IsDate()
    modificado_em: Date;

    

}
