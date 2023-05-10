import { injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';
import { BrowserAddressType, QueryParams, SearchParams } from './types';

@injectable()
export class BrowserAddressService implements BrowserAddressType {
  private subjectQueryParams = new BehaviorSubject<QueryParams>({});
  private subjectSearchParams = new BehaviorSubject<SearchParams>({});

  public queryParams$: BehaviorSubject<QueryParams> = this.subjectQueryParams;
  public searchParams$: BehaviorSubject<SearchParams> = this.subjectSearchParams;

  setParams(params: QueryParams): void {
    if (JSON.stringify(params) === JSON.stringify(this.subjectQueryParams.value)) {
      return;
    }

    this.subjectQueryParams.next(params);
  }

  setSearchParams(params: SearchParams): void {
    this.subjectSearchParams.next(params);
  }
}
