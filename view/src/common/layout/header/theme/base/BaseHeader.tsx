import React, { PropsWithChildren } from 'react';

export const BaseHeader = ({ className, children }: PropsWithChildren<any>): JSX.Element => (
  <header className={className}>
    {children}
  </header>
);
