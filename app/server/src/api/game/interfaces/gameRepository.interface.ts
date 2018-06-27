import { Game } from '../models/game.model';

export interface IGameRepository {
  find(ids: Array<string>): Promise<Array<Game>>;
  findOne(id: string): Promise<Game>;
  create(games: Array<Game>): Promise<Array<string>>;
  update(games: Array<Game>): Promise<Array<string>>;
  delete(ids: Array<string>): Promise<Array<string>>;
}
