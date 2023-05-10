import {
  TheBestTableProvider
} from '@common/table/base/the-best-table.provider';
import { PropsWithChildren } from 'react';
import { TheBestTable } from '@common/table/base/the-best-table';

export const TheBestTableContainer = <RawData, TData>({children}: PropsWithChildren<any>) => {
  return (
      <TheBestTableProvider<RawData, TData>>
        <TheBestTable<RawData, TData>>
          {children}
        </TheBestTable>
      </TheBestTableProvider>
  );
}
