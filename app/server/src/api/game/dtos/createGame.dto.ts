import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString() readonly description: string;
}

export class CreateGameRequest {
  dtos: Array<CreateGameDto>;
}
