import { IsUUID, IsNotEmpty, IsString } from 'class-validator';

export class UpdateGameDto {
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;

  @IsString() readonly name: string;

  @IsString() readonly description: string;
}

export class UpdateGameRequest {
  dtos: Array<UpdateGameDto>;
}
