import { IGameStore } from '../interfaces/gameStore.interface';
import { Game } from '../models/domain/game.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DbGame } from '../../../db/typeOrm/dbModels/game/game.entity';
import { StoreSaveResponse } from '../../../common/models/storeSaveResponse.model';
export class GameStore implements IGameStore {
  constructor(
    @InjectRepository(DbGame) private readonly store: Repository<DbGame>,
  ) {}

  async find(ids: Array<string>): Promise<Array<Game>> {
    return [];
  }

  async findOne(id: string): Promise<Game> {
    return new Game();
  }

  async create(games: Array<Game>): Promise<StoreSaveResponse<string>> {
    return new StoreSaveResponse();
  }

  async update(games: Array<Game>): Promise<StoreSaveResponse<string>> {
    return new StoreSaveResponse();
  }

  async delete(ids: Array<string>): Promise<StoreSaveResponse<string>> {
    return new StoreSaveResponse();
  }
}
