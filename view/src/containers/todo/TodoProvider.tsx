import React, { PropsWithChildren } from 'react';

export const TodoProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  return <>{children}</>;
};
