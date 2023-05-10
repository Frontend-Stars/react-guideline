import { combineLatest, Observable } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { inject, injectable } from 'inversify';
import {
  TableCollection, TableCollectionToken,
  TableMapperToken,
  TableResourceToken,
} from '@common/table';
import type { TableMapper, TableResource } from '@common/table';
import { PaginationService, PaginationServiceToken } from '@common/pagination';
import { FilterService, FilterServiceToken } from '@common/filter';
import {
  BrowserAddressService
} from '@utils/browser/browser-address/browser-address.service';
import { BrowserAddressToken } from '@utils/browser/browser-address/constants';

@injectable()
export class TableManager<RawData, TData> {
  constructor(
      @inject(TableCollectionToken) private tableCollection: TableCollection<TData>,
      @inject(TableResourceToken) private tableResource: TableResource<RawData>,
      @inject(TableMapperToken) private tableMapper: TableMapper<RawData, TData>,
      @inject(PaginationServiceToken) private paginationService: PaginationService,
      @inject(FilterServiceToken) private filterService: FilterService,
      @inject(BrowserAddressToken) private browserAddressService: BrowserAddressService,
  ) {}

  initTest$(): Observable<any> {
    return this.browserAddressService.queryParams$
      .pipe(
        tap(({ page = 1 }) => {
          this.paginationService.setPage(Number(page));
        })
      );
  }

  initTest2$(): Observable<any> {
    return this.paginationService.select().pipe(tap((page) => {
      const params = this.browserAddressService.queryParams$.value;

      this.browserAddressService.setParams({ ...params, page: page.toString() });
    }));
  }

  init$(): Observable<any> {
    const s1 = combineLatest([
      this.paginationService.select(),
      this.paginationService.size$,
      this.filterService.select(),
    ]).pipe(
        switchMap(([page, size, filters]) => {
          console.log('TableManager', { page, size, filters });
          return this.tableResource.get({ page, batch: size, filters });
        }),
        map((response) => {
          this.paginationService.setLength(response.length);
          return this.tableMapper.to(response.data);
        }),
        tap((collection) => {
          this.tableCollection.set(collection);
        })
    );
    const s2 = this.paginationService.select().pipe(tap((page) => {
      const params = this.browserAddressService.queryParams$.value;

      console.log(params, page);

      this.browserAddressService.setParams({ ...params, page: page.toString() });
    }));

    return combineLatest([s1, s2]);
  }
}
