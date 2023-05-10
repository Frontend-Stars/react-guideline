import React, { useCallback } from 'react';
import { useInjection } from '@utils/inversify';
import cx from 'classnames';
import { SortOrder, SortService, SortServiceToken } from '@common/sort';
import { useObservable } from '@utils/rxjs';

import styles from './styles.scss';

export type SortProps = {
  name: string;
}

export const SortComponent = ({ name }: SortProps) => {
  const sortService = useInjection<SortService>(SortServiceToken);
  const sort = useObservable(sortService.select(name), undefined);
  const onChangeHandler = useCallback((value: SortOrder) => {
    return () => sortService.set(name, value);
  }, [name, sortService]);

  return (
      <div className={styles.btn}>
        <button className={cx(styles.btn, { [styles.btn__active]: sort === SortOrder.ASC })} onClick={onChangeHandler(SortOrder.ASC)}>ASC</button>
        <button className={cx(styles.btn, { [styles.btn__active]: sort === SortOrder.DESC })} onClick={onChangeHandler(SortOrder.DESC)}>DESC</button>
      </div>
  );
};
