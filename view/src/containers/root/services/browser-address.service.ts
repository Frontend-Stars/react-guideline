import { injectable } from 'inversify';
import { BehaviorSubject, Observable } from 'rxjs';

export const BrowserAddressToken = Symbol.for('BrowserAddress');

export interface QueryParams {
  [key: string]: string | undefined;
}

export interface BrowserAddressType {
  queryParams$: Observable<QueryParams>;
  setParams(query: QueryParams): void;
}

@injectable()
export class BrowserAddressService implements BrowserAddressType {
  private subjectQueryParams = new BehaviorSubject<QueryParams>({});
  public queryParams$: Observable<QueryParams> = this.subjectQueryParams.asObservable();

  setParams(params: QueryParams): void {
    this.subjectQueryParams.next(params);
  }
}
