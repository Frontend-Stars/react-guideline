import { BaseSchema } from 'yup';
import { BehaviorSubject, Observable } from 'rxjs';
import { injectable } from 'inversify';

export interface BaseForm<Data> {
  data$: BehaviorSubject<Data>;
  error$: BehaviorSubject<Record<string, string[]>>;

  initialValues(): Data;
  setInitialValues(values: Data): void;
  change(key: string, value: keyof Data): void;
  submit(): Observable<Data | Record<string, string[]>>;
  reset(): void;
}

@injectable()
export abstract class AbstractBaseForm<Data> {
  abstract data$: BehaviorSubject<Data>;
  abstract error$: BehaviorSubject<Record<string, string[]>>;

  protected abstract schema(): BaseSchema;

  abstract initialValues(): Data;

  change(key: string, value: keyof Data): void {
    this.data$.next({
      ...this.data$.value,
      [key]: value,
    });
  }

  setInitialValues(values: Data): void {
    this.data$.next(values);
  }

  submit(): Observable<Data> {
    return new Observable<any>((subscriber) => {
      this.schema().validate(this.data$.value, { abortEarly: false })
        .then((value) => {
          this.error$.next({});
          subscriber.next(value);
        })
        .catch((error) => {
          const errors: Record<string, string[]> = {};

          error.inner.forEach((item: { path: string; message: string; }) => {
            if (Array.isArray(errors[item.path])) {
              errors[item.path].push(item.message);
            } else {
              errors[item.path] = [item.message];
            }
          });

          this.error$.next(errors);
          subscriber.error(errors);
        });
    });
  }

  reset(): void {
   this.data$.next(this.initialValues());
   this.error$.next({});
  }
}
