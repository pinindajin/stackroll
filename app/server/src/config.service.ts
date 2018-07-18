// Possibly remove dotenv in favor of docker env vars
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
dotenv.config();

@Injectable()
export class AppConfigService {
  appDomain: string;
  controllerConfigs: Map<string, string>;

  constructor() {
    this.appDomain = process.env.APP_DOMAIN;
    this.controllerConfigs = new Map<string, string>();
    this.controllerConfigs.set('GAME_ENDPOINT', process.env.GAME_ENDPOINT);
    this.controllerConfigs.set('ROLL_ENDPOINT', process.env.ROLL_ENDPOINT);
    this.controllerConfigs.set('STAT_ENDPOINT', process.env.STAT_ENDPOINT);
  }
}