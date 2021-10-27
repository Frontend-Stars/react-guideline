import { COMPONENT_DEFAULT_SIZE } from '@common/base/constants';

import { TextProps } from './types';

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
