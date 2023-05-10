import styles from './styles.scss';
import { PropsWithChildren } from 'react';

export const RowComponent = ({ children }: PropsWithChildren<any>) => {
  return (
      <div className={styles.row}>
        {children}
      </div>
  );
};
