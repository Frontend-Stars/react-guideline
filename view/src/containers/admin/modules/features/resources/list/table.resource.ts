import { Observable, of } from 'rxjs';
import { injectable } from 'inversify';
import { Feature } from '@containers/admin/modules/features/types';
import {
  ListRequestParams,
  ListResource,
  ListResponse,
} from '@common/list/base';

@injectable()
export class FeatureTableResource implements ListResource<Feature> {
  get({ batch, page, filters }: ListRequestParams): Observable<ListResponse<Feature>> {
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
