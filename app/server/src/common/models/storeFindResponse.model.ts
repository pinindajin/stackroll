import { IStoreFindResponse } from '../interfaces/IStoreFindResponse.interface';

export class StoreFindResponse<T> implements IStoreFindResponse<T> {
  pageSize: number;
  pageNumber: number;
  values: Array<T>;
  unfetchedIds: Array<string>;
  moreRecords: boolean;

  constructor(config?: Partial<StoreFindResponse<T>>) {
    Object.assign(this, config);
  }
}
