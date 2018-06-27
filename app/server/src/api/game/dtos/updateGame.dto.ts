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

export class UpdatedGame {
  @IsDefined()
  @IsUUID('4')
  readonly id: string;

  @IsString() readonly name: string;

  @IsString() readonly description: string;

  constructor(config?: Partial<UpdatedGame>) {
    Object.assign(this, config);
  }
}

export class UpdateGamesRequest {
  @ValidateNested({ each: true })
  @Type(() => UpdatedGame)
  @IsArray()
  @IsDefined()
  @IsInstance(UpdatedGame, { each: true })
  @ArrayNotEmpty()
  readonly requests: Array<UpdatedGame>;

  constructor(config?: Partial<UpdatedGame>) {
    Object.assign(this, config);
  }
}

export class UpdateGamesResponse {}
