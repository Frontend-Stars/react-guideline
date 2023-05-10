import { ChangeEvent } from 'react';

export interface InputProps {
  value: string | number;
  hasError?: boolean;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}
