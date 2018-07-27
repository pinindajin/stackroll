import { ICRUDController } from '../../../common/interfaces/controller/ICrudController.interface';
import { Controller, Inject } from '../../../../node_modules/@nestjs/common';
import { AppConfigService } from 'config.service';
import { RollService } from '../services/roll.service';

@Controller('api/roll')
export class RollController implements ICRUDController {
  constructor(
    @Inject('RollService') private readonly service: RollService,
    @Inject('AppConfigService') private readonly config: AppConfigService,
  ) {}

  async find(request) {

  }

  async findOne(request) {

  }

  async create(request) {

  }

  async update(request) {

  }

  async delete(request) {

  }
}