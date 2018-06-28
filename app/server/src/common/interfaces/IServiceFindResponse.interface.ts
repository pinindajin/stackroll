export interface IServiceFindResponse<T> {
  pageSize: number;
  pageNumber: number;
  values: Array<T>;
}
