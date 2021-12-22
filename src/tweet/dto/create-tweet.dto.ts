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
}
