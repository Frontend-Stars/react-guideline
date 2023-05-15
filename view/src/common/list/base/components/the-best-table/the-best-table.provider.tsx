import { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';
import { PaginationService, PaginationServiceToken } from '@common/pagination';
import {
  ButtonPaginationService
} from '@common/pagination/button-pagination/services/button-pagination.service';
import { FilterService, FilterServiceToken } from '@common/filter';
import { BaseFilterService } from '@common/filter/base/services/filter.service';
import { ListCollection, ListCollectionToken } from '@common/list';
import { ListManager, ListManagerToken } from '@common/list/base';

export const TheBestTableProvider = <RawData, TData>({ children }: PropsWithChildren<any>) => {
  useRegistration<ListCollection<TData>>(ListCollectionToken, ListCollection);
  useRegistration<ListManager<RawData, TData>>(ListManagerToken, ListManager);
  useRegistration<PaginationService>(PaginationServiceToken, ButtonPaginationService);
  useRegistration<FilterService>(FilterServiceToken, BaseFilterService);

  return <>{children}</>;
}