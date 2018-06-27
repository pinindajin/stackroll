export class Game {
  id: string;

  name: string;

  description: string;

  constructor(config?: Partial<Game>) {
    Object.assign(this, config);
  }
}
