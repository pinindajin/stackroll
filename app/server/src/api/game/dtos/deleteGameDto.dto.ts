import {
  IsUUID,
  IsNotEmpty,
  IsInt,
  IsDefined,
  IsArray,
  MinLength,
  ArrayNotEmpty,
} from 'class-validator';

export class DeleteGamesRequest {
  @IsDefined()
  @IsArray()
  @IsUUID('4', { each: true })
  @ArrayNotEmpty()
  readonly ids: Array<string>;
}
