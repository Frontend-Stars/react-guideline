import { injectable } from 'inversify';
import config from '@config/production';
import { EnvConfig } from './types';

@injectable()
export class EnvConfigService {
  getConfig(): EnvConfig {
    return config;
  }
}
