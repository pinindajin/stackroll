import { IServiceModifyEntityResponse } from '../interfaces/service/IServiceModifyEntityResponse.interface';

export class CreateEntityResponse implements IServiceModifyEntityResponse {
  ids: Array<string>;

  constructor(config?: Partial<CreateEntityResponse>) {
    Object.assign(this, config);
  }
}
