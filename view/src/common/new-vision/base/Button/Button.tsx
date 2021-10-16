import { ButtonProps } from '@common/new-vision/base/Button/types';

import styles from './styles.scss';

export const Button = ({ children, type, className }: ButtonProps) => {
  return <button className={styles.button + ' ' + className} type={type}>{children}</button>;
}
