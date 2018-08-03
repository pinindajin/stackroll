import { ICRUDController } from '../../../common/interfaces/controller/ICrudController.interface';
import { Controller, Inject, Query, ValidationPipe, Get, Body } from '../../../../node_modules/@nestjs/common';
import { AppConfigService } from 'config.service';
import { RollService } from '../services/roll.service';
import { GetRollsResponse, GetRollsRequest } from '../models/dtos/getRoll.dto';
import { Roll } from '../models/domain/roll.model';
import { ValidateUUIDPipe } from 'common/pipes/validate-uuid.pipe';
import { DeleteRollsRequest, DeleteRollsResponse } from '../models/dtos/deleteRoll.dto';
import { CreateRollsRequest, CreateRollsResponse } from '../models/dtos/createRoll.dto';
import { UpdateRollsRequest, UpdateRollsResponse } from '../models/dtos/updateRoll.dto';

@Controller('api/roll')
export class RollController implements ICRUDController {
  constructor(
    @Inject('RollService') private readonly service: RollService,
    @Inject('AppConfigService') private readonly config: AppConfigService,
  ) {}

  @Get()
  async find(@Query(
    new ValidationPipe({ transform: true }))
    request: GetRollsRequest,
  ): Promise<GetRollsResponse> {
    return new GetRollsResponse();
  }

  @Get(':id')
  async findOne(
    @Query('id', new ValidateUUIDPipe())
    request: string,
  ): Promise<Roll> {
    return new Roll();
  }

  async create(
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    request: CreateRollsRequest,
  ): Promise<CreateRollsResponse> {
    return new CreateRollsResponse();
  }

  async update(
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    request: UpdateRollsRequest,
  ): Promise<UpdateRollsResponse> {
    return new UpdateRollsResponse();
  }

  async delete(
    @Body(new ValidationPipe({ transform: true }))
    request: DeleteRollsRequest,
  ): Promise<DeleteRollsResponse> {
    return new DeleteRollsResponse();
  }
}