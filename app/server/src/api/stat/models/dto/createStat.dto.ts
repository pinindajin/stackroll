import {
  ValidateNested,
  IsArray,
  IsDefined,
  IsInstance,
  ArrayMaxSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsInt } from 'class-validator';
import { IServiceModifyEntityResponse } from 'common/interfaces/service/IServiceModifyEntityResponse.interface';

export class StaticVarToCreate {
  @IsDefined()
  @IsInt()
  value: number;

  constructor(config?: Partial<StaticVarToCreate>) {
    Object.assign(this, config);
  }
}

export class CreateStaticVarReqest {
  @ValidateNested({ each: true })
  @Type(() => StaticVarToCreate)
  @IsArray()
  @IsDefined()
  @IsInstance(StaticVarToCreate, { each: true })
  @ArrayNotEmpty()
  @ArrayMaxSize(100)
  staticVars: Array<StaticVarToCreate>;
}

export class CreateStaticVarResponse implements IServiceModifyEntityResponse {
  ids: Array<string>;

  constructor(config?: Partial<CreateStaticVarResponse>) {
    Object.assign(this, config);
  }
}
