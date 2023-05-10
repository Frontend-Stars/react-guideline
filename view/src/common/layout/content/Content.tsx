import React, { PropsWithChildren } from 'react';
import styles from './styles.scss';

export const Content = ({ children }: PropsWithChildren<any>): JSX.Element => (
    <main className={styles.content}>{children}</main>
);
