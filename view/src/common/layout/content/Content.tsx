import React, { PropsWithChildren } from 'react';

export const Content = ({ children }: PropsWithChildren<any>): JSX.Element => (
  <main className="content">{children}</main>
);
