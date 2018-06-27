import { IStoreResponse } from 'common/interfaces';
import { Game } from '../domain/game.model';

export class SaveGamesResponse implements IStoreResponse {
  isSuccessful: boolean;

  values: Array<string>;

  errors: Array<Error>;

  constructor(config?: Partial<SaveGamesResponse>) {
    Object.assign(this, config);
  }
}
