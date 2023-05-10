import { PropsWithChildren } from 'react';

import styles from './styles.scss';

export const Table = ({ children }: PropsWithChildren<any>) => {
  return (
      <table className={styles.table}>
        {children}
      </table>
  );
}
