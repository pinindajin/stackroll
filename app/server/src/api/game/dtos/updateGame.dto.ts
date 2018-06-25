import { IsUUID, IsNotEmpty, IsString, IsArray } from 'class-validator';

export class UpdateGameRequest {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;

  @IsString() readonly name: string;

  @IsString() readonly description: string;
}

export class UpdateGamesRequest {
  @IsArray() readonly dtos: Array<UpdateGameRequest>;
}
