import { Module } from '@nestjs/common';
import { AppConfigService } from 'config.service';

const appConfigServiceProvider = {
  provide: 'AppConfigService',
  useClass: AppConfigService,
};

@Module({
  providers: [appConfigServiceProvider],
  exports: [AppConfigService],
})
export class AppConfigModule {}
