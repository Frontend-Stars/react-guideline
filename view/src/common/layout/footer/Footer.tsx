import React, { PropsWithChildren } from 'react';

export const Footer = ({ children }: PropsWithChildren<any>): JSX.Element => (
  <footer>{children}</footer>
);
