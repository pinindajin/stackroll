import { IsUUID, IsNotEmpty, IsInt } from 'class-validator';
import { PagedRequest } from '../../../common/models/PagedRequest.m';

export class GetGameDto {
  @IsUUID('5', { each: true })
  ids: Array<string>;
}

export class GetGameRequest implements PagedRequest {
  @IsInt() pageSize: number;
  @IsInt() pageOffset: number;
  dto: GetGameDto;
}
