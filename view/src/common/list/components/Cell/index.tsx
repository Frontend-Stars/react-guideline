import { PropsWithChildren } from 'react';

import styles from './styles.scss';

export const Cell = ({ children }: PropsWithChildren<any>) => {
  return (
      <td className={styles.cell}>
        {children}
      </td>
  );
}
