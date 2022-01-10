import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsDate, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Bluemer',
        description: `O nome será utilizado para cadastrar um usuário na rede social`,
    })
    nome: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Link da imagem',
        description: `O link da imagem será utilizada para cadastrar uma imagem do usuário na rede social`,
    })
    imagem: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Sou uma pessoa....trabalho com....etc',
        description: `Uma pequena descrição sobre o usuário`,
    })
    bio: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: '01/01/2022',
        description: `Data de nascimento do usuário do tipo string`,
    })
    nascimento: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: '1111111abcde',
        description: `Senha do usuário utilizando uma mistura de caracteres`,
    })
    senha: string;

    @IsNotEmpty()
    @IsDate()
    criado_em: Date;

    @IsNotEmpty()
    @IsDate()
    modificado_em: Date;

    

}
