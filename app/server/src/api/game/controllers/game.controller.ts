import {
  Get,
  Controller,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
  Body,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { GameService } from '../services/game.service';
import { GetGamesRequest } from '../dtos/getGame.dto';
import { ValidateUUIDPipe } from '../../../common/pipes/validate-uuid.pipe';
import { CreateGamesRequest } from '../dtos/createGame.dto';

// dev
const x = console.log;

@Controller('api/game')
export class GameController {
  constructor(private readonly appService: GameService) {}

  @Get()
  async find(
    @Query(new ValidationPipe({ transform: true }))
    request: GetGamesRequest,
  ): Promise<string> {
    return `::: ${JSON.stringify(request)} ${request instanceof
      GetGamesRequest} ${Array.isArray(request.ids)}`;
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
    @Body(new ValidationPipe({ transform: true }))
    request: CreateGamesRequest,
  ): Promise<string> {
    return `::: ${JSON.stringify(request)} ${request instanceof
      CreateGamesRequest} ${Array.isArray(request.dtos)}`;
  }
}
