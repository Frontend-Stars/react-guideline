import { inject, injectable } from 'inversify';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  ListCollection,
  ListCollectionToken,
} from '@common/list';
import { FilterService, FilterServiceToken } from '@common/filter';
import { PaginationService, PaginationServiceToken } from '@common/pagination';
import {
  ListMapper,
  ListMapperToken,
  ListResource,
  ListResourceToken,
} from '@common/list/base';

@injectable()
export class ListManager<RawData, TData> {
  constructor(
      @inject(ListCollectionToken) private collection: ListCollection<TData>,
      @inject(ListMapperToken) private mapper: ListMapper<RawData, TData>,
      @inject(ListResourceToken) private resource: ListResource<RawData>,
      @inject(FilterServiceToken) private filterService: FilterService,
      @inject(PaginationServiceToken) private paginationService: PaginationService,
  ) {}

  init$(): Observable<any> {
    return combineLatest([
      this.paginationService.select(),
      this.paginationService.size$,
      this.filterService.select(),
    ]).pipe(
      switchMap(([page, size, filters]) => {
        return this.resource.get({ page, batch: size, filters });
      }),
      map((response) => {
        this.paginationService.setLength(response.length);
        return this.mapper.to(response.data);
      }),
      tap((collection) => {
        this.collection.set(collection);
      })
    );
  }
}