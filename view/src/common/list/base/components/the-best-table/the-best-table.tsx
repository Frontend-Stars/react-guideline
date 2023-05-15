import React, { PropsWithChildren } from 'react';
import { useObservableStateLess } from '@utils/rxjs';
import { ButtonPagination } from '@common/pagination/button-pagination';
import { SearchFilter } from '@common/filter/base/search';
import { useInjection } from '@utils/inversify';
import { ListManager, ListManagerToken } from '@common/list/base';

import styles from './styles.scss';

export const TheBestTable = <RawData, TData>({ children }: PropsWithChildren<any>) => {
  const manager = useInjection<ListManager<RawData, TData>>(ListManagerToken);

  useObservableStateLess(manager.init$());

  return (
    <div className={styles.root}>
      <SearchFilter />
      {children}
      <ButtonPagination />
    </div>
  );
}
