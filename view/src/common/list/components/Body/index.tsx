import React from 'react';
import { List, ListProps } from '@common/list/components/List';

export type BodyProps<TData> = ListProps<TData>;

export const Body = <TData,>({ component }: BodyProps<TData>) => {
  return (
    <tbody className="body">
      <List component={component} />
    </tbody>
  );
};
