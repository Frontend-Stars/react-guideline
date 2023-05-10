import { Observable } from 'rxjs';

export interface IHttpService {
  get<TRequestParams, TResponse>(url: string, params?: TRequestParams): Observable<TResponse>;

  update<TRequestData, TResponse>(url: string, data: TRequestData): Observable<TResponse>
}