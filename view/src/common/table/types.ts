import { BaseCollection, Collection } from '@utils/store';
import { Observable } from 'rxjs';
import { FilterList } from '@common/filter';
import { injectable } from 'inversify';

@injectable()
export class TableCollection<TData> extends BaseCollection<TData> {}

export interface TableMapper<RawData, TData> {
  to(data: Array<RawData>): Collection<TData>;
  from(collection: Collection<TData>): Array<RawData>;
}

export interface TableRequestParams {
  filters: FilterList;
  page: number;
  batch: number;
}

export interface TableResponse<TData> {
  length: number;
  data: TData[];
}

export interface TableResource<TData> {
  get(params: TableRequestParams): Observable<TableResponse<TData>>;
}

