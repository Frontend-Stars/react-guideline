import { ButtonProps } from '@common/base/Button/types';
import {
  ComponentSize,
  ComponentSizeUpper,
  GenerateSizeCompilation,
} from '@common/base/types';

export type SubmitButtonProps = Omit<ButtonProps, 'type' | 'size'> & {
  size?: GenerateSizeCompilation<'button' | 'text', ComponentSizeUpper> | ComponentSize;
};
