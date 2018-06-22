import { IsUUID, IsNotEmpty } from 'class-validator';

export class GetGameDto {
  @IsUUID()
  @IsNotEmpty()
  readonly id: Array<string>;
}
