import { IStoreFindRequest } from '../interfaces/IStoreFindRequest.interface';

export class StoreFindRequest implements IStoreFindRequest {
  pageOffset: number;
  pageSize: number;
  ids: Array<string>;

  constructor(config?: Partial<StoreFindRequest>) {
    Object.assign(this, config);
  }
}
