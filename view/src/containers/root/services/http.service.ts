import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';
import axios from 'axios';
import { HttpParams } from '../types/http.type';
import { EnvConfigToken } from '../types/env-config.type';
import { EnvConfigService } from './env-config.service';

@injectable()
export class HttpService {
  constructor(
      @inject(EnvConfigToken) private config: EnvConfigService
  ) {}

  get<T>(url: string, params?: HttpParams): Observable<T> {
    const { baseUrl } = this.config.getConfig();

    return new Observable<T>((subscriber) => {
      axios.get<T>(baseUrl + url, { params })
        .then(response => response.data)
        .then((data) => {
          subscriber.next(data);
          subscriber.complete();
        })
        .catch((err) => {
          subscriber.error(err);
        });
    });
  }
}
