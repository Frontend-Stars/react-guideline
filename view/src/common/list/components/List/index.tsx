import React, { ComponentType } from 'react';
import { useInjection } from '@utils/inversify';
import { useObservable } from '@utils/rxjs';
import { ListCollection, ListCollectionToken } from '@common/list';

export type ListProps<TData> = {
  component: ComponentType<{ item: TData }>;
}

export const List = <TData,>({ component: Component }: ListProps<TData>) => {
  const collection = useInjection<ListCollection<TData>>(ListCollectionToken);
  const data = useObservable(collection.select(), {});
  const array = Object.entries(data).map(([id, item]) => (
      <Component key={id} item={item} />
  ));

  return <>{array}</>;
};