import { IsUUID, IsString } from 'class-validator';

export class Game {
  @IsUUID('4') id: string;

  name: string;

  description: string;

  constructor(config?: Partial<Game>) {
    Object.assign(this, config);
  }
}
