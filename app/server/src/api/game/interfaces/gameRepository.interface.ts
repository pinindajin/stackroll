import { Game } from '../models/domain/game.model';
import { SaveGamesResponse } from '../models/dal/saveGamesResponse.model';

export interface IGameStore {
  find(ids: Array<string>): Promise<Array<Game>>;
  findOne(id: string): Promise<Game>;
  create(games: Array<Game>): Promise<SaveGamesResponse>;
  update(games: Array<Game>): Promise<Array<string>>;
  delete(ids: Array<string>): Promise<Array<string>>;
}
