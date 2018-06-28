export interface IStoreFindResponse<T> {
  pageSize: number;
  pageNumber: number;
  values: Array<T>;
}
