import { Observable } from 'rxjs';

export interface PaginationService {
  length$: Observable<number>;
  size$: Observable<number>;

  prev(): void;
  next(): void;
  select(): Observable<number>;
  setPage(page: number): void;
  setLength(length: number): void;
  setSize(size: number): void;
}
