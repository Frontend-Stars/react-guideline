export const EnvConfigToken = Symbol.for('EnvConfig');

export interface EnvConfig {
  baseUrl: string;
}
