import { IsDate, IsInt, IsNotEmpty, IsString, Max } from "class-validator";

export class CreateTweetDto {

@IsNotEmpty()
@IsString()
@Max(280)
texto: string;

@IsNotEmpty()
@IsString()
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
conteudo: string;

}
