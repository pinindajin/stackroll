import { IGameStore } from '../interfaces/gameStore.interface';
import { Game } from '../models/domain/game.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DbGame } from '../../../db/typeOrm/dbModels/game/game.entity';
import { StoreSaveResponse } from '../../../common/models/storeSaveResponse.model';
import { StoreFindResponse } from '../../../common/models/storeFindResponse.model';
import { StoreFindRequest } from '../../../common/models/storeFindRequest.model';
export class GameStore implements IGameStore {
  constructor(
    @InjectRepository(DbGame) private readonly store: Repository<DbGame>,
  ) {}

  async find(request: StoreFindRequest): Promise<StoreFindResponse<Game>> {
    return new StoreFindResponse<Game>();
  }

  async findOne(id: string): Promise<Game> {
    return new Game();
  }

  async create(games: Array<Game>): Promise<StoreSaveResponse<string>> {
    return new StoreSaveResponse<string>();
  }

  async update(games: Array<Game>): Promise<StoreSaveResponse<string>> {
    return new StoreSaveResponse<string>();
  }

  async delete(ids: Array<string>): Promise<StoreSaveResponse<string>> {
    return new StoreSaveResponse<string>();
  }
}
