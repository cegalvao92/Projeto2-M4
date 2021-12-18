import { PartialType } from '@nestjs/mapped-types';
import { CreateSeguidoreDto } from './create-seguidore.dto';

export class UpdateSeguidoresDto extends PartialType(CreateSeguidoreDto) {}
