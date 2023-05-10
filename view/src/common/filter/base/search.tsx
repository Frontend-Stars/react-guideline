import React, { useCallback } from 'react';
import { useInjection } from '@utils/inversify';
import { FilterService, FilterServiceToken } from '@common/filter';
import { useObservable } from '@utils/rxjs';

export const SearchFilter = () => {
  const filter = useInjection<FilterService>(FilterServiceToken);
  const filters = useObservable(filter.select(), {});
  const onChangeHandler = useCallback((e) => {
    filter.set('search', e.target.value);
  }, [filter]);
  const searchFilter = filters['search'];

  return (
      <div>
        <input onChange={onChangeHandler} value={searchFilter} />
      </div>
  );
};
