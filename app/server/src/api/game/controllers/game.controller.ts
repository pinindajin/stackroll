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
} from '../dtos';
import { ValidateUUIDPipe } from '../../../common/pipes/validate-uuid.pipe';
import { IGameService } from '../interfaces';

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
  ): Promise<string> {
    return `${id} ${typeof id}`;
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    request: CreateGamesRequest,
  ): Promise<string> {
    return `::: ${JSON.stringify(request)} ${request instanceof
      CreateGamesRequest} ${Array.isArray(request.requests)}`;
  }

  @Patch()
  async update(
    @Body(new ValidationPipe({ transform: true, skipMissingProperties: true }))
    request: UpdateGamesRequest,
  ): Promise<string> {
    return `::: ${JSON.stringify(request)} ${request instanceof
      UpdateGamesRequest} ${Array.isArray(request.requests)}`;
  }

  @Delete()
  async delete(
    @Body(new ValidationPipe({ transform: true }))
    request: DeleteGamesRequest,
  ): Promise<string> {
    return `::: ${JSON.stringify(request)} ${request instanceof
      DeleteGamesRequest} ${Array.isArray(request.ids)}`;
  }
}
