import {
  IsUUID,
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsInstance,
  ArrayNotEmpty,
  ArrayMaxSize,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GameToUpdate {
  @IsDefined()
  @IsUUID('4')
  id: string;

  @IsString() name: string;

  @IsString() description: string;

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
  @ArrayMaxSize(100)
  GamesToUpdate: Array<GameToUpdate>;

  constructor(config?: Partial<GameToUpdate>) {
    Object.assign(this, config);
  }
}

export class UpdateGamesResponse {}
