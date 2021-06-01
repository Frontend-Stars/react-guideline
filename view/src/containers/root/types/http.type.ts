export const HttpServiceToken = Symbol.for('HttpService');

export interface HttpParams {
  [key: string]: string | string[];
}
