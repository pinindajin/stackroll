import { Module } from '@nestjs/common';
import { GameModule } from 'api/game/game.module';
import { bootstrapTypeOrm, typeOrmPostgresConfig } from 'db/typeOrm';
import { AppConfigService } from 'config.service';
import { AppConfigModule } from 'config.module';

@Module({
  imports: [
    GameModule,
    bootstrapTypeOrm(typeOrmPostgresConfig),
    AppConfigModule,
  ],
})
export class AppModule {}
