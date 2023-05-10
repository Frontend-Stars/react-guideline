import { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';
import {
  TableCollection,
  TableCollectionToken,
  TableManagerToken,
} from '@common/table';
import { TableManager } from '@common/table/base/managers/table.manager';
import { PaginationService, PaginationServiceToken } from '@common/pagination';
import {
  ButtonPaginationService
} from '@common/pagination/button-pagination/services/button-pagination.service';
import { FilterService, FilterServiceToken } from '@common/filter';
import { BaseFilterService } from '@common/filter/base/services/filter.service';

export const TheBestTableProvider = <RawData, TData>({ children }: PropsWithChildren<any>) => {
  useRegistration<TableCollection<TData>>(TableCollectionToken, TableCollection);
  useRegistration<TableManager<RawData, TData>>(TableManagerToken, TableManager);
  useRegistration<PaginationService>(PaginationServiceToken, ButtonPaginationService);
  useRegistration<FilterService>(FilterServiceToken, BaseFilterService);

  return <>{children}</>;
}