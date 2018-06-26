import { IsUUID, IsNotEmpty, IsInt, IsArray, IsDefined } from 'class-validator';
import { IPagedRequest } from '../../../common/interfaces/IPagedRequest.i';
import { Get } from '@nestjs/common';
import { Transform } from 'class-transformer';

export class GetGameRequest {
  @IsDefined()
  @IsUUID('4')
  readonly id: string;
}

export class GetGamesRequest implements IPagedRequest {
  @IsDefined()
  @Transform(x => +x)
  @IsInt()
  readonly pageSize: number;

  @IsDefined()
  @Transform(x => +x)
  @IsInt()
  readonly pageOffset: number;

  @IsDefined()
  @IsArray()
  @IsUUID('4', { each: true })
  readonly ids: Array<string>;
}
