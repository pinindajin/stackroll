import { Module } from '@nestjs/common';
import { GameController } from './controllers/game.controller';
import { GameService } from './services/game.service';
import { GameRepository } from './repositories/game.repository';

const gameServiceProvider = {
  provide: 'GameService',
  useClass: GameService,
};

const gameRepositoryProvider = {
  provide: 'GameRepository',
  useClass: GameRepository,
};

@Module({
  controllers: [GameController],
  providers: [gameServiceProvider, gameRepositoryProvider],
})
export class GameModule {}
