import { IsInt } from 'class-validator';

export class PagedRequest {
  @IsInt() pageSize: number;
  @IsInt() pageOffset: number;
}
