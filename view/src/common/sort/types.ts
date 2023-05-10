import { Observable } from 'rxjs';

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export type Sort = {
  [key: string]: SortOrder;
}

export interface SortService {
  select(name: string): Observable<SortOrder | undefined>;
  set(name: string, value: SortOrder): void;
  delete(name: string): void;
}
