export interface IStoreSaveResponse<T> {
  isSuccessful: boolean;
  values: Array<T>;
  errors: Array<Error>;
}
