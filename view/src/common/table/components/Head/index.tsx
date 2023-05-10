import { PropsWithChildren } from 'react';

export const Head = ({ children }: PropsWithChildren<any>) => {
  return (
      <thead>
        {children}
      </thead>
  );
}
