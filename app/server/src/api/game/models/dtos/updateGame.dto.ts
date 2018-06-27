import {
  IsUUID,
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsInstance,
  ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GameToUpdate {
  @IsDefined()
  @IsUUID('4')
  readonly id: string;

  @IsString() readonly name: string;

  @IsString() readonly description: string;

  constructor(config?: Partial<GameToUpdate>) {
    Object.assign(this, config);
  }
}

export class UpdateGamesRequest {
  @ValidateNested({ each: true })
  @Type(() => GameToUpdate)
  @IsArray()
  @IsDefined()
  @IsInstance(GameToUpdate, { each: true })
  @ArrayNotEmpty()
  readonly GamesToUpdate: Array<GameToUpdate>;

  constructor(config?: Partial<GameToUpdate>) {
    Object.assign(this, config);
  }
}

export class UpdateGamesResponse {}
