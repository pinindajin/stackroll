import { IsUUID, IsInt } from 'class-validator';

export class StaticVar {
  @IsUUID('4') id: string;

  @IsInt() value: number;

  constructor(config?: Partial<StaticVar>) {
    Object.assign(this, config);
  }
}
