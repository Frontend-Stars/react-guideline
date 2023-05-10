import React, { ComponentType } from 'react';
import { useInjection } from '@utils/inversify';
import { TableCollection, TableCollectionToken } from '@common/table';
import { useObservable } from '@utils/rxjs';

export type BodyProps<TData> = {
  component: ComponentType<{ item: TData }>;
}

export const Body = <TData,>({ component: Component }: BodyProps<TData>) => {
  const collection = useInjection<TableCollection<TData>>(TableCollectionToken);
  const data = useObservable(collection.select(), {});
  const array = Object.entries(data).map(([id, item]) => (
      <Component key={id} item={item} />
  ));

  return (
    <tbody className="body">
      {array}
    </tbody>
  );
};
