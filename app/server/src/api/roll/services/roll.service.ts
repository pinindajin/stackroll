import { Injectable } from '../../../../node_modules/@nestjs/common';
import { IRollService } from '../interfaces/IRollService.interface';
import { ServiceFindResponse } from '../../../common/models/serviceFindResponse.model';
import { Roll } from '../models/domain/roll.model';
import { GetRollsRequest } from '../models/dtos/getRoll.dto';
import { CreateRollsRequest } from '../models/dtos/createRoll.dto';
import { ServiceModifyResponse } from '../../../common/models/serviceModifyResponse.model';
import { UpdateRollsRequest } from '../models/dtos/updateRoll.dto';
import { DeleteRollsRequest } from '../models/dtos/deleteRoll.dto';

@Injectable()
export class RollService implements IRollService {
  async find(request: GetRollsRequest): Promise<ServiceFindResponse<Roll>> {
    return new ServiceFindResponse<Roll>();
  }

  async findOne(id: string): Promise<Roll> {
    return new Roll();
  }

  async create(request: CreateRollsRequest): Promise<ServiceModifyResponse> {
    return new ServiceModifyResponse();
  }

  async update(request: UpdateRollsRequest): Promise<ServiceModifyResponse> {
    return new ServiceModifyResponse();
  }

  async delete(request: DeleteRollsRequest): Promise<ServiceModifyResponse> {
    return new ServiceModifyResponse();
  }
}