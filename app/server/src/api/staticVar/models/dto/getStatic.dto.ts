import { IsUUID, IsNotEmpty, IsInt, IsArray, IsDefined } from 'class-validator';
import { IPagedRequest } from '../../../../common/interfaces';
import { Transform } from 'class-transformer';
import { IPagedResponse } from 'common/interfaces/IPagedResponse.interface';
import { StaticVar } from '../domain/staticVar.model';

export class GetStaticVarRequest {
  @IsDefined()
  @IsUUID('4')
  readonly id: string;

  constructor(config?: Partial<GetStaticVarRequest>) {
    Object.assign(this, config);
  }
}

export class GetStaticVarResponse {
  readonly staticVar: StaticVar;

  constructor(config?: Partial<GetStaticVarResponse>) {
    Object.assign(this, config);
  }
}

export class GetStaticVarsRequest implements IPagedRequest {
  @IsDefined()
  @Transform(x => +x)
  @IsInt()
  pageSize: number = 100;

  @IsDefined()
  @Transform(x => +x)
  @IsInt()
  pageOffset: number = 0;

  @IsArray()
  @IsUUID('4', { each: true })
  ids?: Array<string>;

  constructor(config?: Partial<GetStaticVarsRequest>) {
    Object.assign(this, config);
  }
}

export class GetStaticVarsResponse implements IPagedResponse {
  pageSize: number;

  pageNumber: number;

  nextPageLink: string;

  staticVars: Array<StaticVar>;

  constructor(config?: Partial<GetStaticVarsResponse>) {
    Object.assign(this, config);
  }
}
