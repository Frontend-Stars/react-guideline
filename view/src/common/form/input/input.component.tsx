import { InputProps } from '@common/form/input/types';
import cx from 'classnames';
import styles from './styles.scss';

export const InputComponent = ({ hasError, ...props }: InputProps) =>
    <input className={cx(styles.input, { [styles.input_error]: hasError })} {...props} />;
