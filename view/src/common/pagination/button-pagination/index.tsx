import React, { ReactNode, useCallback, useMemo } from 'react';
import cx from 'classnames';
import { useInjection } from '@utils/inversify';
import { PaginationServiceToken, PaginationService } from '@common/pagination';
import { useObservable } from '@utils/rxjs';

import styles from './styles.scss';

export type ButtonPaginationProps = {
  limit?: number;
};

export const ButtonPagination = ({ limit = 10 }: ButtonPaginationProps) => {
  const service = useInjection<PaginationService>(PaginationServiceToken);
  const page = useObservable(service.select(), 1);
  const size = useObservable(service.size$, 0);
  const length = useObservable(service.length$, 0);
  const totalButtons = Math.ceil(length / size) || 0;
  const onNumberHandler = useCallback((pageNumber) => {
    service.setPage(pageNumber);
  }, [service]);
  const buttons: ReactNode[] = useMemo(() => {
    const halfLimit = Math.ceil(limit / 2);
    const buttons = [];

    if (limit < totalButtons) {
      for (let i = 0; i < halfLimit; i++) {
        buttons.push(<button key={i} className={cx(styles.btn, { [styles.active]: page === (i + 1) })} onClick={() => onNumberHandler(i + 1)}>{i + 1}</button>);
      }

      buttons.push(<span key="sep" className={styles.separator}>...</span>);

      for (let i = totalButtons, m = totalButtons - halfLimit; m < i; i--) {
        buttons.push(<button key={totalButtons - i} className={cx(styles.btn, { [styles.active]: page === (totalButtons - i) })} onClick={() => onNumberHandler(totalButtons - i)}>{totalButtons - i}</button>);
      }
    } else {
      for (let i = 0, m = totalButtons; i < m; i++) {
        buttons.push(<button key={i} className={cx(styles.btn, { [styles.active]: page === (i + 1) })} onClick={() => onNumberHandler(i + 1)}>{i + 1}</button>);
      }
    }

    return buttons;
  }, [limit, totalButtons, page, onNumberHandler]);
  const hasMorePages = length && totalButtons > 1;
  const onPrevHandler = useCallback(() => {
    service.prev();
  }, [service]);
  const onNextHandler = useCallback(() => {
    service.next();
  }, [service]);

  return hasMorePages ? (
      <div className={styles.root}>
        <button className={styles.btn} onClick={onPrevHandler}>prev</button>
        {buttons}
        <button className={styles.btn} onClick={onNextHandler}>next</button>
      </div>
  ) : null;
};
