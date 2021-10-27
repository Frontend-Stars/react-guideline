import classNames from 'classnames';

import { ButtonProps } from './types';
import styles from './styles.scss';

export const Button = ({ children, type, className }: ButtonProps) =>
  <button className={classNames(styles.button, className)} type={type}>{children}</button>;
