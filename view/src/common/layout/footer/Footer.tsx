import React, { PropsWithChildren } from 'react';
import styles from './styles.scss';

export const Footer = ({ children }: PropsWithChildren<any>): JSX.Element => (
    <footer className={styles.footer}>{children}</footer>
);
