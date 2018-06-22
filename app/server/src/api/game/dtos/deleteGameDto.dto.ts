import { IsUUID, IsNotEmpty, IsInt } from 'class-validator';

export class DeleteGameDto {
  @IsUUID('5', { each: true })
  ids: Array<string>;
}

export class DeleteGameRequest {
  dto: DeleteGameDto;
}
