import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsString() readonly description: string;
}
