import { ChangeEvent } from 'react';

export interface InputProps {
  value: string | number;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}
