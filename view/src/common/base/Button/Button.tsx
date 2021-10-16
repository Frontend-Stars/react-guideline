import { ButtonProps } from '@common/base/Button/types';
import { BUTTON_TYPE_DEFAULT } from '@common/base/Button/constants';
import { COMPONENT_DEFAULT_SIZE } from '@common/base/constants';

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
