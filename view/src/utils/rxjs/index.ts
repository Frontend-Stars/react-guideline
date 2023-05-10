import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export const useObservable =<T>(observable$: Observable<T>, initialValues: T) => {
  const [state, setState] = useState<T>(initialValues);

  useEffect(() => {
    const subs = observable$.subscribe(setState);

    return () => {
      subs.unsubscribe();
    };
  }, []);

  return state;
}

export const useObservableStateLess =<T>(observable$: Observable<T>) => {
  useEffect(() => {
    const subs = observable$.subscribe();

    return () => {
      subs.unsubscribe();
    };
  }, []);
}

export * from './loading-wrapper.operator';
