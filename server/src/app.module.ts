import { Module } from '@nestjs/common';
import { GameController } from './api/game/controllers/game.controller';
import { GameService } from './api/game/services/game.service';

@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService],
})
export class AppModule {}
