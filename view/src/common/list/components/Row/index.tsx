import { PropsWithChildren } from 'react';

import styles from './styles.scss';

export const Row = ({ children }: PropsWithChildren<any>) => {
  return (
      <tr className={styles.row}>
        {children}
      </tr>
  );
}
