import { PropsWithChildren } from 'react';

import styles from './styles.scss';

export const HText = ({ children }: PropsWithChildren<any>) => {
  return <h1 className={styles.root}>{children}</h1>;
}
