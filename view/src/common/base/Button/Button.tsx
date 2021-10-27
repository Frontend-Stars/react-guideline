import { COMPONENT_DEFAULT_SIZE } from '@common/base/constants';

import { ButtonProps } from './types';
import { BUTTON_TYPE_DEFAULT } from './constants';

export const Button = ({
  size = COMPONENT_DEFAULT_SIZE,
  type = BUTTON_TYPE_DEFAULT,
  children
}: ButtonProps) => {
  return (
    <button type={type} className={`button button--${size}`}>
      {children}
    </button>
  );
};
