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

export class GetGameResponse {}

export class GetGamesRequest implements IPagedRequest {
  @IsDefined()
  @Transform(x => +x)
  @IsInt()
  readonly pageSize: number;

  @IsDefined()
  @Transform(x => +x)
  @IsInt()
  readonly pageOffset: number;

  @IsArray()
  @IsUUID('4', { each: true })
  readonly ids: Array<string>;

  constructor(config?: Partial<GetGamesRequest>) {
    Object.assign(this, config);
  }
}

export class GetGamesResponse implements IPagedResponse {
  readonly pageSize: number;

  readonly pageNumber: number;

  readonly nextPageLink: string;

  readonly games: Array<Game>;

  constructor(config?: Partial<GetGamesResponse>) {
    Object.assign(this, config);
  }
}
