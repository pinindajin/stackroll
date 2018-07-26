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
    try {
      if (request.ids && request.ids.length > 0) {
        const [dbGames, count] = await this.store
          .createQueryBuilder()
          .select('game')
          .from(DbGame, 'game')
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
    catch (err) {
      this.logAndThrow(err);
    }
  }

  async findOne(id: string): Promise<Game> {
    try {
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
    catch (err) {
      this.logAndThrow(err);
    }
  }

  async create(games: Array<Game>): Promise<StoreSaveResponse<string>> {
    try {
      const dbGames = games.map(_game => {
        return new DbGame({
          id: uuid(),
          name: _game.name,
          description: _game.description,
        });
      });
      const saveResult = await this.store.save(dbGames);
      return new StoreSaveResponse<string>({
        values: saveResult.map(result => result.id),
      });
    } catch (err) {
      this.logAndThrow(err);
    }
  }

  async update(games: Array<Game>): Promise<StoreSaveResponse<string>> {
    try {
      const savedGames = games
        .filter(async game => {
          const gameToUpdate = await this.store.findOne({ id: game.id });
          if (gameToUpdate) {
            gameToUpdate.name = game.name;
            gameToUpdate.description = game.description;
            this.store.save(gameToUpdate);
            return true;
          }
        });
      const savedIds = savedGames.map(savedGame => {
        return savedGame.id;
      });
      return new StoreSaveResponse<string>({
        values: savedIds,
      });
    }
    catch (err) {
      this.logAndThrow(err);
    }
  }

  async delete(ids: Array<string>): Promise<StoreSaveResponse<string>> {
    try {
      const deletedGameIds = ids
        .filter(async id => {
          const gameToDelete = await this.store.findOne({ id });
          if (gameToDelete) {
            this.store.remove(gameToDelete);
            return true;
          }
        });
      return new StoreSaveResponse<string>({
        values: ids,
      });
    }
    catch (err) {
      this.logAndThrow(err);
    }
  }

  // Temp Function
  private logAndThrow(err) {
    const l = console.log;
    l('GameStore: ' + err);
    throw err;
  }
}
