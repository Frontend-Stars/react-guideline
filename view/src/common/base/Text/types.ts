import { PropsWithChildren } from 'react';
import { ComponentSize } from '@common/base/types';

export type TextProps = PropsWithChildren<{
  size?: ComponentSize;
  inline?: boolean;
  className?: string;
}>
