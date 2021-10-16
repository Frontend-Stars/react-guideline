import { ButtonProps } from '@common/new-vision/base/Button/types';
import { Button } from '@common/new-vision/base/Button/Button';
import { Text } from '@common/new-vision/base/Text/Text';

import styles from './styles.scss';

export const SubmitButton = ({ children }: ButtonProps) => {
  return (
    <Button className={styles.submitButton}>
      <Text className={styles.submitText}>{children}</Text>
    </Button>
  );
}
