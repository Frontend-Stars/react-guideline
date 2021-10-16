import { PropsWithChildren } from 'react';
import { ComponentSize } from '@common/base/types';

export type ButtonType = 'submit' | 'reset' | 'button';

export type ButtonProps = PropsWithChildren<{
  size?: ComponentSize;
  type?: ButtonType;
}>
