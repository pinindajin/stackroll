import { IStoreFindResponse } from '../interfaces/IStoreFindResponse.interface';

export class StoreFindResponse<T> implements IStoreFindResponse<T> {
  pageSize: number;
  pageNumber: number;
  values: Array<T>;

  constructor(config?: Partial<StoreFindResponse<T>>) {
    Object.assign(this, config);
  }
}
