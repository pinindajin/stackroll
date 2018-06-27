import { IGameRepository } from '../interfaces/gameRepository.interface';
import { Game } from '../models/game.model';
export class GameRepository implements IGameRepository {
  async find(ids: Array<string>): Promise<Array<Game>> {
    return [];
  }

  async findOne(id: string): Promise<Game> {
    return new Game();
  }

  async create(games: Array<Game>): Promise<Array<string>> {
    return [];
  }

  async update(games: Array<Game>): Promise<Array<string>> {
    return [];
  }

  async delete(ids: Array<string>): Promise<Array<string>> {
    return [];
  }
}
