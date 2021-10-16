import { TextProps } from '@common/base/Text/types';
import { COMPONENT_DEFAULT_SIZE } from '@common/base/constants';

export const Text = ({
  size = COMPONENT_DEFAULT_SIZE,
  inline = false,
  children
}: TextProps) => {
  const Component = inline ? 'span' : 'p';

  return (
    <Component className={`text text--${size}`}>
      {children}
    </Component>
  );
};
