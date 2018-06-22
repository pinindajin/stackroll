import { IsInt, IsString } from 'class-validator';

export class PagedResponse {
  @IsInt() pageSize: number;
  @IsInt() pageNumber: number;
  @IsString() nextPageLink: string;
}
