import { Collection } from '@utils/store';
import { FilterList } from '@common/filter';
import { Observable } from 'rxjs';

export interface ListMapper<RawData, TData> {
  to(data: Array<RawData>): Collection<TData>;
  from(collection: Collection<TData>): Array<RawData>;
}

export interface ListRequestParams {
  filters: FilterList;
  page: number;
  batch: number;
}

export interface ListResponse<TData> {
  length: number;
  data: TData[];
}

export interface ListResource<TData> {
  get(params: ListRequestParams): Observable<ListResponse<TData>>;
}