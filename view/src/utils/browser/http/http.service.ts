import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';
import axios from 'axios';
import { EnvConfigToken } from '@utils/env-config/constants';
import { EnvConfigService } from '@utils/env-config/env-config.service';
import { IHttpService } from './types';

@injectable()
export class HttpService implements IHttpService {
  constructor(
      @inject(EnvConfigToken) private config: EnvConfigService
  ) {}

  get<TRequestParams, TResponse>(url: string, params?: TRequestParams): Observable<TResponse> {
    const { baseUrl } = this.config.getConfig();

    return new Observable<TResponse>((subscriber) => {
      const cancelTokenSource = axios.CancelToken.source();

      axios.get<TResponse>(baseUrl + url, { params, cancelToken: cancelTokenSource.token })
        .then(response => response.data)
        .then((data) => {
          subscriber.next(data);
          subscriber.complete();
        })
        .catch((err) => {
          cancelTokenSource.cancel();
          subscriber.error(err);
        });
    });
  }

  update<TRequestData, TResponse>(url: string, data: TRequestData): Observable<TResponse> {
    const { baseUrl } = this.config.getConfig();

    return new Observable<TResponse>((subscriber) => {
      const cancelTokenSource = axios.CancelToken.source();

      axios.post<TResponse>(baseUrl + url, data, { cancelToken: cancelTokenSource.token })
        .then(response => response.data)
        .then((data) => {
          subscriber.next(data);
          subscriber.complete();
        })
        .catch((err) => {
          cancelTokenSource.cancel();
          subscriber.error(err);
        });
    });
  }
}
