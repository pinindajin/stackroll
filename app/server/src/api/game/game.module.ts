import { Module } from '@nestjs/common';
import { GameController } from './controllers/game.controller';
import { GameService } from './services/game.service';
import { GameStore } from './stores/game.store';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbGame } from 'db/typeOrm/dbModels/game/game.entity';
import { AppConfigModule } from 'config.module';

const gameServiceProvider = {
  provide: 'GameService',
  useClass: GameService,
};

const gameStoreProvider = {
  provide: 'GameRepository',
  useClass: GameStore,
};

const dbEntityImports = [DbGame];

@Module({
  imports: [TypeOrmModule.forFeature(dbEntityImports), AppConfigModule],
  controllers: [GameController],
  providers: [gameServiceProvider, gameStoreProvider],
})
export class GameModule {}
