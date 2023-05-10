import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { injectable } from 'inversify';
import { Sort, SortOrder, SortService } from '@common/sort';

@injectable()
export class BaseSortService implements SortService {
  sort$ = new BehaviorSubject<Sort>({});

  delete(name: string): void {
    delete this.sort$.value[name];

    this.sort$.next(this.sort$.value);
  }

  select(name: string): Observable<SortOrder | undefined> {
    return this.sort$.pipe(map((sort) => sort[name]));
  }

  set(name: string, value: SortOrder): void {
    this.sort$.value[name] = value;

    this.sort$.next(this.sort$.value);
  }
}
