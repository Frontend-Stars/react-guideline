import { PropsWithChildren } from 'react';
import { TheBestList } from './the-best-list';
import { TheBestListProvider } from './the-best-list.provider';

export const TheBestListContainer = <RawData, TData>({children}: PropsWithChildren<any>) => {
  return (
      <TheBestListProvider<RawData, TData>>
        <TheBestList<RawData, TData>>
          {children}
        </TheBestList>
      </TheBestListProvider>
  );
}
