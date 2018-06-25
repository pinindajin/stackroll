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
import { GetGamesRequest, GetGameRequest } from '../dtos/getGame.dto';
import { IsUUID } from 'class-validator';
import { ValidateUUIDPipe } from '../../../common/pipes/validate-uuid.pipe';

@Controller('api/game')
export class GameController {
  constructor(private readonly appService: GameService) {}

  @Get()
  async find(
    @Query(new ValidationPipe({ transform: true }))
    request: GetGamesRequest,
  ): Promise<string> {
    // Dev
    const x = console.log;
    x(request instanceof GetGamesRequest);
    return `::: ${JSON.stringify(request)} ${Array.isArray(request.ids)}`;
  }

  @Get(':id')
  async findOne(
    @Param('id', new ValidateUUIDPipe())
    id: string,
  ): Promise<string> {
    return `${id} ${typeof id}`;
  }
}
