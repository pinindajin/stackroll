import { Module } from '@nestjs/common';
import { GameController } from './controllers/game.controller';
import { GameService } from './services/game.service';
import { GameStore } from './stores/game.store';

const gameServiceProvider = {
  provide: 'GameService',
  useClass: GameService,
};

const gameStoreProvider = {
  provide: 'GameRepository',
  useClass: GameStore,
};

@Module({
  controllers: [GameController],
  providers: [gameServiceProvider, gameStoreProvider],
})
export class GameModule {}
