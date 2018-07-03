import { ICreateEntityResponse } from '../interfaces/ICreateEntityResponse.interface';

export class CreateEntityResponse implements ICreateEntityResponse {
  ids: Array<string>;

  constructor(config?: Partial<CreateEntityResponse>) {
    Object.assign(this, config);
  }
}
