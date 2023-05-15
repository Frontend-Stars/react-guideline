import { PropsWithChildren } from 'react';

export const HRow = ({ children }: PropsWithChildren<any>) => {
  return (
      <tr>
        {children}
      </tr>
  );
}
