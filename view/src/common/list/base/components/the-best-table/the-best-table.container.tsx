import React, { PropsWithChildren } from 'react';
import {
  TheBestTable,
  TheBestTableProvider,
} from '@common/list/base/components';

export const TheBestTableContainer = <RawData, TData>({children}: PropsWithChildren<any>) => {
  return (
      <TheBestTableProvider<RawData, TData>>
        <TheBestTable<RawData, TData>>
          {children}
        </TheBestTable>
      </TheBestTableProvider>
  );
}
