import {
  IsString,
  IsArray,
  ValidateNested,
  IsDefined,
  IsInstance,
  ArrayNotEmpty,
  ArrayMaxSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Game } from '../domain/game.model';
import { Hyperlink } from '../../../../common/models/hyperlink.model';
import { ICreateEntityResponse } from '../../../../common/interfaces/ICreateEntityResponse.interface';

export class GameToCreate {
  @IsDefined()
  @IsString()
  name: string;

  @IsString() description: string;

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
  @ArrayMaxSize(100)
  GamesToCreate: Array<GameToCreate>;

  constructor(config?: Partial<CreateGamesRequest>) {
    Object.assign(this, config);
  }
}

export class CreateGamesResponse implements ICreateEntityResponse {
  ids: Array<string>;

  constructor(config?: Partial<CreateGamesResponse>) {
    Object.assign(this, config);
  }
}
