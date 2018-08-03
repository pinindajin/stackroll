import { ICRUDController } from '../../../common/interfaces/controller/ICrudController.interface';
import { Controller, Inject, Query, ValidationPipe, Get } from '../../../../node_modules/@nestjs/common';
import { AppConfigService } from 'config.service';
import { RollService } from '../services/roll.service';
import { GetRollsResponse, GetRollsRequest } from '../models/dtos/getRoll.dto';
import { Roll } from '../models/domain/roll.model';
import { ValidateUUIDPipe } from 'common/pipes/validate-uuid.pipe';

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

  async create(request) {

  }

  async update(request) {

  }

  async delete(request) {

  }
}