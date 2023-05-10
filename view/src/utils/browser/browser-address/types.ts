import { Observable } from 'rxjs';
import { ParsedQuery } from 'query-string';

export interface QueryParams {
  [key: string]: string | undefined;
}

export type SearchParams = ParsedQuery;

export interface BrowserAddressType {
  queryParams$: Observable<QueryParams>;
  searchParams$: Observable<SearchParams>;

  setParams(query: QueryParams): void;
  setSearchParams(params: SearchParams): void;
}
