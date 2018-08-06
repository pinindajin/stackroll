import { Module } from '@nestjs/common';
import { GameModule } from 'api/game/game.module';
import { bootstrapTypeOrm, typeOrmPostgresConfig } from 'db/typeOrm';
import { AppConfigModule } from 'config.module';
import { RollModule } from 'api/roll/roll.module';

@Module({
  imports: [
    GameModule,
    RollModule,
    bootstrapTypeOrm(typeOrmPostgresConfig),
    AppConfigModule,
  ],
})
export class AppModule {}
