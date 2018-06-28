import { IStoreSaveResponse } from 'common/interfaces';

export class StoreSaveResponse<T> implements IStoreSaveResponse<T> {
  isSuccessful: boolean;
  values: Array<T>;
  errors: Array<Error>;

  constructor(config?: Partial<StoreSaveResponse<T>>) {
    Object.assign(this, config);
  }
}
