import { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';
import { SortService, SortServiceToken } from '@common/sort';
import { BaseSortService } from '@common/sort/base/services/sort.service';

export const ListProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistration<SortService>(SortServiceToken, BaseSortService)

  return <>{children}</>;
};
