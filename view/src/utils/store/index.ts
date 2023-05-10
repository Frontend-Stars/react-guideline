import { BehaviorSubject, Observable } from 'rxjs';
import { injectable } from 'inversify';

export type Collection<TData> = {
  [key: string]: TData;
}

export type SelectedItem<TData> = BehaviorSubject<TData | undefined>;

export type SelectedCollection<TData> = {
  [key: string]: SelectedItem<TData>;
}

@injectable()
export class BaseCollection<TData> {
  private collection$: BehaviorSubject<Collection<TData>> = new BehaviorSubject<Collection<TData>>({});

  select(): Observable<Collection<TData>> {
    return this.collection$;
  }

  set(data: Collection<TData>): void {
    this.collection$.next(data);
  }

  update(id: string, item: TData): void {
    this.collection$.value[id] = item;
    this.collection$.next(this.collection$.value);
  }

  add(id: string, item: TData): void {
    if (!this.collection$.value[id]) {
      this.collection$.value[id] = item;
    }

    this.collection$.next(this.collection$.value);
  }

  remove(id: string): void {
    if (this.collection$.value[id]) {
      delete this.collection$.value[id];
    }

    this.collection$.next(this.collection$.value);
  }
}

//
// export type SelectedEntityField<TData> = {
//   [key: string]: BehaviorSubject<TData | undefined>;
// }
//
// export class Entity<TData> {
//   private entity = {};
//   private selected$: SelectedEntityField<TData> = {};
//
//   constructor(data: TData) {
//     this.entity = data;
//
//     Object.
//   }
//
//   select(): Observable<TData> {
//     return this.entity$;
//   }
//
//   selectByKey(key: string): Observable<TData> {
//     return this.selected$[key];
//   }
// }
