import React, { PropsWithChildren } from 'react';

export const DashboardProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  return <>{children}</>;
};
