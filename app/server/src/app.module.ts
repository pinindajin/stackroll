import { Module } from '@nestjs/common';
import { GameModule } from 'api/game/game.module';
import { bootstrapTypeOrm, typeOrmPostgresConfig } from 'db/typeOrm';
import { AppConfig } from './app.config';

const x = console.log;
x(`::: ${JSON.stringify(typeOrmPostgresConfig)}`);

@Module({
  imports: [GameModule, bootstrapTypeOrm(typeOrmPostgresConfig)],
  providers: [AppConfig],
})
export class AppModule {}
