import { injectable } from 'inversify';
import { EnvConfig } from '../types/env-config.type';
import config from '@config/production';

@injectable()
export class EnvConfigService {
  getConfig(): EnvConfig {
    return config;
  }
}
