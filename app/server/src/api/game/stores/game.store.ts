import { IGameStore } from '../interfaces/gameRepository.interface';
import { Game } from '../models/domain/game.model';
import { SaveGamesResponse } from '../models/dal/saveGamesResponse.model';
export class GameStore implements IGameStore {
  async find(ids: Array<string>): Promise<Array<Game>> {
    return [];
  }

  async findOne(id: string): Promise<Game> {
    return new Game();
  }

  async create(games: Array<Game>): Promise<SaveGamesResponse> {
    return new SaveGamesResponse();
  }

  async update(games: Array<Game>): Promise<Array<string>> {
    return [];
  }

  async delete(ids: Array<string>): Promise<Array<string>> {
    return [];
  }
}
