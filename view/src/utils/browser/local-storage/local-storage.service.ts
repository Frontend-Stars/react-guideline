import { inject, injectable } from 'inversify';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TemporaryStorage } from '@utils/browser/local-storage/types';
import { WindowToken } from '@utils/browser/window/constants';

@injectable()
export class LocalStorageService implements TemporaryStorage {
  private subject = new Subject<string>();

  constructor(
    @inject(WindowToken) private windowService: Window,
  ) {}

  getItem<T>(key: string, defaultValues: T): T {
    try  {
      return JSON.parse(this.windowService.localStorage.getItem(key) ?? '') as T;
    } catch (e) {
      return defaultValues;
    }
  }

  setItem<T>(key: string, value: T): void {
    this.windowService.localStorage.setItem(key, JSON.stringify(value));
    this.subject.next(key);
  }

  selectItem<T>(key: string, defaultValues: T): Observable<T> {
    return merge(
        new BehaviorSubject<string>(key),
        this.subject.asObservable()
    ).pipe(
        filter((val) =>  val === key),
        map(() => this.getItem<T>(key, defaultValues))
      );
  }
}
