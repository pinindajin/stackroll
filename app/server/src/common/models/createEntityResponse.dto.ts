import { IServiceCreateResponse } from '../interfaces/service/IServiceCreateResponse.interface';

export class CreateEntityResponse implements IServiceCreateResponse {
  ids: Array<string>;

  constructor(config?: Partial<CreateEntityResponse>) {
    Object.assign(this, config);
  }
}
