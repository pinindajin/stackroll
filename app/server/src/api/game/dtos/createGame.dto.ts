import { IsString, IsNotEmpty, IsInt, IsArray } from 'class-validator';

export class CreateGameRequest {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString() readonly description: string;
}

export class CreateGamesRequest {
  @IsArray() readonly dtos: Array<CreateGameRequest>;
}
