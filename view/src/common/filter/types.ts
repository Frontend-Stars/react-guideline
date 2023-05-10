import { Observable } from 'rxjs';

export type FilterList = {
  [key: string]: any;
}

export interface FilterService {
  select(): Observable<FilterList>;
  set(name: string, value: any): void;
  delete(name: string): void;
}
