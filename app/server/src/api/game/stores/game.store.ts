import { IGameStore } from '../interfaces/IGameStore.interface';
import { Game } from '../models/domain/game.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DbGame } from 'db/typeOrm/dbModels/game/game.entity';
import { StoreSaveResponse } from 'common/models/storeSaveResponse.model';
import { StoreFindResponse } from 'common/models/storeFindResponse.model';
import { StoreFindRequest } from 'common/models/storeFindRequest.model';
import { Injectable } from '../../../../node_modules/@nestjs/common';
import { json } from '../../../../node_modules/@types/body-parser';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GameStore implements IGameStore {
  constructor(
    @InjectRepository(DbGame) private readonly store: Repository<DbGame>,
  ) {}

  async find(request: StoreFindRequest): Promise<StoreFindResponse<Game>> {
    if (request.ids && request.ids.length > 0) {
      const [dbGames, count] = await this.store
        .createQueryBuilder('game')
        .where('game.id IN (:...ids)', { ids: request.ids })
        .skip(request.pageOffset)
        .take(request.pageSize)
        .getManyAndCount();
      const games = dbGames.map(dbGame => {
        return new Game({
          id: dbGame.id,
          name: dbGame.name,
          description: dbGame.description,
        });
      });
      const fethcedIds = games.map(game => game.id);
      const unfetchedIds = request.ids
        .filter(id => !fethcedIds.includes(id));
      return new StoreFindResponse<Game>({
        pageNumber: (Math.ceil(request.pageOffset / request.pageSize) + 1),
        pageSize: request.pageSize,
        totalRecords: count,
        values: games,
        unfetchedIds,
        moreRecords: (request.pageOffset + request.pageSize) < count,
      });
    } else {
      const [dbGames, count] = await this.store
        .createQueryBuilder('game')
        .skip(request.pageOffset)
        .take(request.pageSize)
        .getManyAndCount();
      const games = dbGames.map(dbGame => {
        return new Game({
          id: dbGame.id,
          name: dbGame.name,
          description: dbGame.description,
        });
      });
      return new StoreFindResponse<Game>({
        pageNumber: (Math.ceil(request.pageOffset / request.pageSize) + 1),
        pageSize: request.pageSize,
        totalRecords: count,
        values: games,
        moreRecords: (request.pageOffset + request.pageSize) < count,
      });
    }
  }

  async findOne(id: string): Promise<Game> {
    const dbGame = await this.store.findOne({
      id,
    });
    if (dbGame) {
      return new Game({
        id: dbGame.id,
        name: dbGame.name,
        description: dbGame.description,
      });
    } else {
      return null;
    }
  }

  async create(games: Array<Game>): Promise<StoreSaveResponse<string>> {
    const dbGames = games.map(_game => {
      return new DbGame({
        id: uuid(),
        name: _game.name,
        description: _game.description,
      });
    });
    try {
      const saveResult = await this.store.save(dbGames);
      return new StoreSaveResponse<string>({
        isSuccessful: true,
        values: saveResult.map(result => result.id),
      });
    } catch (err) {
      // TODO: figure out error types
      return new StoreSaveResponse<string>({
        errors: [new Error('Error records to database.')],
      });
    }
  }

  async update(games: Array<Game>): Promise<StoreSaveResponse<string>> {
    return new StoreSaveResponse<string>();
  }

  async delete(ids: Array<string>): Promise<StoreSaveResponse<string>> {
    return new StoreSaveResponse<string>();
  }
}
