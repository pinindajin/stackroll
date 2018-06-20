import { Get, Controller } from '@nestjs/common';
import { GameService } from '../services/game.service';

@Controller()
export class GameController {
  constructor(private readonly appService: GameService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
