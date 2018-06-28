import { Game } from '../models/domain/game.model';
import { StoreSaveResponse } from '../../../common/models/storeSaveResponse.model';

export interface IGameStore {
  find(ids: Array<string>): Promise<Array<Game>>;
  findOne(id: string): Promise<Game>;
  create(games: Array<Game>): Promise<StoreSaveResponse<string>>;
  update(games: Array<Game>): Promise<StoreSaveResponse<string>>;
  delete(ids: Array<string>): Promise<StoreSaveResponse<string>>;
}
