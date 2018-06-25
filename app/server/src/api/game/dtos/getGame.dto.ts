import { IsUUID, IsNotEmpty, IsInt, IsArray } from 'class-validator';
import { IPagedRequest } from '../../../common/interfaces/IPagedRequest.i';
import { Get } from '@nestjs/common';
import { Transform } from 'class-transformer';

export class GetGameRequest {
  @IsNotEmpty()
  @IsUUID('4')
  readonly id: string;
}

export class GetGamesRequest implements IPagedRequest {
  @IsNotEmpty()
  @Transform(x => +x)
  @IsInt()
  readonly pageSize: number;

  @IsNotEmpty()
  @Transform(x => +x)
  @IsInt()
  readonly pageOffset: number;

  @IsNotEmpty()
  @IsArray()
  @IsUUID('4', { each: true })
  readonly ids: Array<string>;
}
