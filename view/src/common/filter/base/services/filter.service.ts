import { injectable } from 'inversify';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterList, FilterService } from '@common/filter';

@injectable()
export class BaseFilterService implements FilterService {
  private filter$ = new BehaviorSubject<FilterList>({});

  delete(name: string): void {
    delete this.filter$.value[name];

    this.filter$.next(this.filter$.value);
  }

  select(): Observable<FilterList> {
    return this.filter$;
  }

  set(name: string, value: any): void {
    this.filter$.value[name] = value;

    this.filter$.next(this.filter$.value);
  }
}
