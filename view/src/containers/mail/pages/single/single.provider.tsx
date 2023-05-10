import { PropsWithChildren } from 'react';

export const SingleProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  return <>{children}</>;
};
