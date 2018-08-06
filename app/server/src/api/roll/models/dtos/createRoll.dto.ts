import { IsDefined, IsString, ValidateNested, IsArray, IsInstance, ArrayNotEmpty, ArrayMaxSize } from 'class-validator';
import { Hyperlink } from 'common/models/hyperlink.model';
import { Type } from 'class-transformer';
export class RollToCreate {
  @IsDefined()
  @IsString()
  name: string;

  @IsString()
  description: string;

  constructor(config?: Partial<RollToCreate>) {
    Object.assign(this, config);
  }
}

export class CreateRollsRequest {
  @ValidateNested({ each: true })
  @Type(() => RollToCreate)
  @IsArray()
  @IsDefined()
  @IsInstance(RollToCreate, { each: true })
  @ArrayNotEmpty()
  @ArrayMaxSize(100)
  RollsToCreate: Array<RollToCreate>;

  constructor(config?: Partial<CreateRollsRequest>) {
    Object.assign(this, config);
  }
}

export class CreateRollsResponse {
  ids: Array<number>;

  links: Array<Hyperlink>;

  constructor(config?: Partial<CreateRollsResponse>) {
    Object.assign(this, config);
  }
}