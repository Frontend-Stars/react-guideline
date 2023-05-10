import { PropsWithChildren } from 'react';
import styles from './styles.scss';

export const Inline = ({children}: PropsWithChildren<void>) =>
  <div className={styles.root}>
    {children}
  </div>;
