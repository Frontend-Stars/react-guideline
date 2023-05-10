import { BehaviorSubject, Observable } from 'rxjs';
import { PaginationService } from '@common/pagination';
import { injectable } from 'inversify';

@injectable()
export class ButtonPaginationService implements PaginationService {
  private currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);

  length$: BehaviorSubject<number> = new BehaviorSubject(0);
  size$: BehaviorSubject<number> = new BehaviorSubject(25);

  setLength(length: number): void {
    this.length$.next(length);
  }

  setSize(size: number): void {
    this.size$.next(size);
  }

  setPage(page: number) {
    this.currentPage$.next(page);
  }

  prev(): void {
    const current = this.currentPage$.value;

    if (current - 1 >= 1) {
      this.currentPage$.next(current - 1);
    }
  }

  next(): void {
    const current = this.currentPage$.value;
    const length = this.length$.value;
    const size = this.size$.value;

    if (current + 1 <= Math.ceil(length / size)) {
      this.currentPage$.next(current + 1);
    }
  }

  select(): Observable<number> {
    return this.currentPage$;
  }
}