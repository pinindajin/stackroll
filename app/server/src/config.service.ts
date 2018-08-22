// Possibly remove dotenv in favor of docker env vars
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
dotenv.config();

export type appConfigKeys = 'GAME_ENDPOINT' | 'ROLL_ENDPOINT' | 'STAT_ENDPOINT';
export const APPCONFIGKEYS = {
  GAME_ENDPOINT: 'GAME_ENDPOINT' as appConfigKeys,
  ROLL_ENDPOINT: 'ROLL_ENDPOINT' as appConfigKeys,
  STAT_ENDPOINT: 'STAT_ENDPOINT' as appConfigKeys,
};

@Injectable()
export class AppConfigService {
  appDomain: string;
  appPort: string;
  controllerConfigs: Map<string, string>;

  constructor() {
    this.appDomain = process.env.APP_DOMAIN;
    this.appPort = process.env.APP_PORT;
    this.controllerConfigs = new Map<string, string>();
    this.controllerConfigs.set(APPCONFIGKEYS.GAME_ENDPOINT, process.env.GAME_ENDPOINT);
    this.controllerConfigs.set(APPCONFIGKEYS.ROLL_ENDPOINT, process.env.ROLL_ENDPOINT);
    this.controllerConfigs.set(APPCONFIGKEYS.STAT_ENDPOINT, process.env.STAT_ENDPOINT);
  }
}

const CONTROLLER_CONFIGS = new Map<string, string>();
CONTROLLER_CONFIGS.set(APPCONFIGKEYS.GAME_ENDPOINT, process.env.GAME_ENDPOINT);
CONTROLLER_CONFIGS.set(APPCONFIGKEYS.ROLL_ENDPOINT, process.env.ROLL_ENDPOINT);
CONTROLLER_CONFIGS.set(APPCONFIGKEYS.STAT_ENDPOINT, process.env.STAT_ENDPOINT);

export const APP_CONFIG = {
  APP_DOMAIN: process.env.APP_DOMAIN,
  APP_PORT: process.env.APP_PORT,
  CONTROLLER_CONFIGS,
};
