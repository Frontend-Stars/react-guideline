import { PropsWithChildren } from 'react';

export type ButtonType = 'submit' | 'reset' | 'button';

export type ButtonProps = PropsWithChildren<{
  type?: ButtonType;
  className?: string;
}>
