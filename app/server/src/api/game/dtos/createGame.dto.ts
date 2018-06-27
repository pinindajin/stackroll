import {
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsInstance,
  ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatedGame {
  @IsDefined()
  @IsString()
  readonly name: string;

  @IsString() readonly description: string;

  constructor(config?: Partial<CreatedGame>) {
    Object.assign(this, config);
  }
}

export class CreateGamesRequest {
  @ValidateNested({ each: true })
  @Type(() => CreatedGame)
  @IsArray()
  @IsDefined()
  @IsInstance(CreatedGame, { each: true })
  @ArrayNotEmpty()
  readonly requests: Array<CreatedGame>;

  constructor(config?: Partial<CreateGamesRequest>) {
    Object.assign(this, config);
  }
}

export class CreateGamesResponse {}
