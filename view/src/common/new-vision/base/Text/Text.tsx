import { TextProps } from '@common/base/Text/types';

import styles from './styles.scss';

export const Text = ({
  inline = false,
  children,
  className
}: TextProps) => {
  const Component = inline ? 'span' : 'p';

  return (
    <Component className={styles.text + ' ' + className}>
      {children}
    </Component>
  );
};
