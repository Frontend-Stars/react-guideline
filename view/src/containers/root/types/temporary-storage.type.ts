import { Observable } from 'rxjs';

export const TemporaryStorageToken = Symbol.for('TemporaryStorage');

export interface TemporaryStorage {
  getItem<T>(key: string, defaultValues: T): T;
  setItem<T>(key: string, value: T): void;
  selectItem<T>(key: string, defaultValues: T): Observable<T>;
}
