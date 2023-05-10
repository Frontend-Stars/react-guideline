import { PropsWithChildren } from 'react';

import styles from './styles.scss';

export const HCell = ({ children }: PropsWithChildren<any>) => {
  return (
      <th className={styles.cell}>
        {children}
      </th>
  );
}
