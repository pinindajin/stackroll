import { IsUUID, IsNotEmpty, IsInt } from 'class-validator';

export class DeleteGameRequest {
  @IsUUID('4', { each: true })
  readonly ids: Array<string>;
}
