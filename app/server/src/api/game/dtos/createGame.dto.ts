import {
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsInstance,
  ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGameRequest {
  @IsDefined()
  @IsString()
  readonly name: string;

  @IsString() readonly description: string;

  constructor(config?: Partial<CreateGameRequest>) {
    Object.assign(this, config);
  }
}

export class CreateGamesRequest {
  @ValidateNested({ each: true })
  @Type(() => CreateGameRequest)
  @IsArray()
  @IsDefined()
  @IsInstance(CreateGameRequest, { each: true })
  @ArrayNotEmpty()
  readonly requests: Array<CreateGameRequest>;

  constructor(config?: Partial<CreateGamesRequest>) {
    Object.assign(this, config);
  }
}
