import {
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsInstance,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGameRequest {
  @IsDefined()
  @IsString()
  readonly name: string;

  @IsString() readonly description: string;
}

export class CreateGamesRequest {
  @ValidateNested({ each: true })
  @Type(() => CreateGameRequest)
  @IsArray()
  @IsDefined()
  @IsInstance(CreateGameRequest, { each: true })
  readonly dtos: Array<CreateGameRequest>;
}
