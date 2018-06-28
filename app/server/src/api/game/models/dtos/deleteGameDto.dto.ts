import { IsUUID, IsDefined, IsArray, ArrayNotEmpty } from 'class-validator';

export class DeleteGamesRequest {
  @IsDefined()
  @IsArray()
  @IsUUID('4', { each: true })
  @ArrayNotEmpty()
  ids: Array<string>;

  constructor(config?: Partial<DeleteGamesRequest>) {
    Object.assign(this, config);
  }
}

export class DeleteGamesResponse {}
