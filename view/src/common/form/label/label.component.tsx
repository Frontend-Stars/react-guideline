import { LabelProps } from '@common/form/label/types';
import styles from './styles.scss';

export const LabelComponent = ({ label }: LabelProps) => (
    <label className={styles.root}>
      {label}
    </label>
);
