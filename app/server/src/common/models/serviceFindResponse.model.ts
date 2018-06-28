import { IServiceFindResponse } from '../interfaces/IServiceFindResponse.interface';

export class ServiceFindResponse<T> implements IServiceFindResponse<T> {
  pageSize: number;
  pageNumber: number;
  values: Array<T>;

  constructor(config?: Partial<ServiceFindResponse<T>>) {
    Object.assign(this, config);
  }
}
