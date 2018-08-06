import { IsUUID } from '../../../../../node_modules/class-validator';

export class Roll {
  @IsUUID('4')
  id: string;

  name: string;

  description: string;

  constructor(config?: Partial<Roll>) {
    Object.assign(this, config);
  }
}