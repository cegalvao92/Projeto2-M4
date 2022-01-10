import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsString, Max } from "class-validator";

export class CreateTweetDto {

@IsNotEmpty()
@IsString()
@Max(280)
@ApiProperty({
    example: 'blablablabla.....',
    description: `Preencher o campo de texto com o tweet de até 280 caracteres.`,
})
texto: string;

@IsNotEmpty()
@IsString()
@ApiProperty({
    example: 'código do emoji',
    description: `Preencher com o código do emoji`,
})
emoji: string;

@IsNotEmpty()
@IsDate()
data_postagem: Date;

@IsNotEmpty()
@IsInt()
curtidas: number;

@IsNotEmpty()
@IsInt()
usuarioid: number;
 
@IsNotEmpty()
@IsInt()
tweetid: number;

@IsNotEmpty()
@IsString()
@ApiProperty({
    example: 'Tecnologia',
    description: `Informar o tipo de conteúdo do tweet`,
})
conteudo: string;

}
