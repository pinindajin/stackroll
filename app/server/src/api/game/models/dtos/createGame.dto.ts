import {
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsInstance,
  ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GameToCreate {
  @IsDefined()
  @IsString()
  readonly name: string;

  @IsString() readonly description: string;

  constructor(config?: Partial<GameToCreate>) {
    Object.assign(this, config);
  }
}

export class CreateGamesRequest {
  @ValidateNested({ each: true })
  @Type(() => GameToCreate)
  @IsArray()
  @IsDefined()
  @IsInstance(GameToCreate, { each: true })
  @ArrayNotEmpty()
  readonly GamesToCreate: Array<GameToCreate>;

  constructor(config?: Partial<CreateGamesRequest>) {
    Object.assign(this, config);
  }
}

export class CreateGamesResponse {}
