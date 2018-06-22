import {
  Get,
  Controller,
  Post,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { GameService } from '../services/game.service';

@Controller()
export class GameController {
  constructor(private readonly appService: GameService) {}

  @Get()
  async find(@Body() getGameDto: GetGameDto): void {}

  @Get(':id')
  async findOne(@Param('id') id) {}
}
