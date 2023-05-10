import { Observable, of } from 'rxjs';
import { injectable } from 'inversify';
import {
  TableRequestParams,
  TableResource,
  TableResponse,
} from '@common/table';
import { Feature } from '@containers/admin/modules/features/types';

@injectable()
export class FeatureTableResource implements TableResource<Feature> {
  get({ batch, page, filters }: TableRequestParams): Observable<TableResponse<Feature>> {
    const searchFilter = filters['search'] || '';
    const data = Array(100)
      .fill(0)
      .map((_, i) => ({name: `test #${i}${searchFilter ? '-' + searchFilter : ''}`, state: Boolean(i % 2), rule: '*'}));
    const sliceData = data.slice((page - 1) * batch, page * batch);

    return of({
      length: data.length,
      data: sliceData
    });
  }
}
