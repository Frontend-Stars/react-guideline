import React, { PropsWithChildren } from 'react';
import styles from './styles.scss';

export const Header = ({ children }: PropsWithChildren<any>): JSX.Element => (
    <header className={styles.header}>{children}</header>
);

