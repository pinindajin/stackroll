import {
  IsUUID,
  IsNotEmpty,
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsInstance,
  ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateGameRequest {
  @IsDefined()
  @IsUUID('4')
  readonly id: string;

  @IsString() readonly name: string;

  @IsString() readonly description: string;
}

export class UpdateGamesRequest {
  @ValidateNested({ each: true })
  @Type(() => UpdateGameRequest)
  @IsArray()
  @IsDefined()
  @IsInstance(UpdateGameRequest, { each: true })
  @ArrayNotEmpty()
  readonly requests: Array<UpdateGameRequest>;
}
