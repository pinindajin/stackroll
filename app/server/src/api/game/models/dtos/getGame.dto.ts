import { IsUUID, IsNotEmpty, IsInt, IsArray, IsDefined } from 'class-validator';
import { IPagedRequest } from '../../../../common/interfaces';
import { Transform } from 'class-transformer';
import { IPagedResponse } from 'common/interfaces/IPagedResponse.interface';
import { Game } from '../domain';

export class GetGameRequest {
  @IsDefined()
  @IsUUID('4')
  readonly id: string;

  constructor(config?: Partial<GetGameRequest>) {
    Object.assign(this, config);
  }
}

export class GetGameResponse {
  readonly game: Game;

  constructor(config?: Partial<GetGameResponse>) {
    Object.assign(this, config);
  }
}

export class GetGamesRequest implements IPagedRequest {
  @IsDefined()
  @Transform(x => +x)
  @IsInt()
  pageSize: number;

  @IsDefined()
  @Transform(x => +x)
  @IsInt()
  pageOffset: number;

  @IsArray()
  @IsUUID('4', { each: true })
  ids?: Array<string>;

  constructor(config?: Partial<GetGamesRequest>) {
    Object.assign(this, config);
  }
}

export class GetGamesResponse implements IPagedResponse {
  pageSize: number;

  pageNumber: number;

  nextPageLink: string;

  games: Array<Game>;

  constructor(config?: Partial<GetGamesResponse>) {
    Object.assign(this, config);
  }
}
