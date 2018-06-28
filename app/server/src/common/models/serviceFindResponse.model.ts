import { IServiceFindResponse } from '../interfaces/IServiceFindResponse.interface';

export class ServiceFindResponse<T> implements IServiceFindResponse<T> {
  pageSize: number;
  pageNumber: number;
  values: Array<T>;
  unfetchedIds: Array<string>;
  moreRecords: boolean;

  constructor(config?: Partial<ServiceFindResponse<T>>) {
    Object.assign(this, config);
  }
}
