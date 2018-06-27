import { IsUUID, IsString } from 'class-validator';

export class Game {
  @IsUUID('4') id: string;

  @IsString() name: string;

  @IsString() description: string;

  constructor(config?: Partial<Game>) {
    Object.assign(this, config);
  }
}
