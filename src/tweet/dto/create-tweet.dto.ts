<<<<<<< HEAD
import { IsDate, IsInt, IsNotEmpty, IsString, Max } from "class-validator";

export class CreateTweetDto {
id: number;

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
=======
/* eslint-disable prettier/prettier */
import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTweetDto {
  id: number;

  @IsNotEmpty()
  @IsString()
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
  tweetid: number;
>>>>>>> b777047bcec13cb449e13560006d3113f86dc692
}
