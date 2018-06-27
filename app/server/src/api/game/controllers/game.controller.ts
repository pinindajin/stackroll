import {
  Get,
  Controller,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  ValidationPipe,
  Inject,
} from '@nestjs/common';
import {
  GetGamesRequest,
  GetGamesResponse,
  CreateGamesRequest,
  UpdateGamesRequest,
  DeleteGamesRequest,
  UpdateGamesResponse,
  DeleteGamesResponse,
} from '../dtos';
import { ValidateUUIDPipe } from '../../../common/pipes/validate-uuid.pipe';
import { IGameService } from '../interfaces';
import { GetGameResponse } from '../dtos/getGame.dto';
import { CreateGamesResponse } from '../dtos/createGame.dto';

// dev
const x = console.log;

@Controller('api/game')
export class GameController {
  constructor(@Inject('GameService') private readonly service: IGameService) {}

  @Get()
  async find(
    @Query(new ValidationPipe({ transform: true }))
    request: GetGamesRequest,
  ): Promise<GetGamesResponse> {
    return this.service.find(request);
  }

  @Get(':id')
  async findOne(
    @Param('id', new ValidateUUIDPipe())
    id: string,
  ): Promise<GetGameResponse> {
    return this.service.findOne(id);
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    request: CreateGamesRequest,
  ): Promise<CreateGamesResponse> {
    return this.service.create(request);
  }

  @Patch()
  async update(
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    request: UpdateGamesRequest,
  ): Promise<UpdateGamesResponse> {
    return this.service.update(request);
  }

  @Delete()
  async delete(
    @Body(new ValidationPipe({ transform: true }))
    request: DeleteGamesRequest,
  ): Promise<DeleteGamesResponse> {
    return this.service.delete(request);
  }
}
