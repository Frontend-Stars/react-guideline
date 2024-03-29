import { Observable, of } from 'rxjs';
import { injectable } from 'inversify';
import { Mail } from '@containers/mail/types';
import {
  ListRequestParams,
  ListResource,
  ListResponse,
} from '@common/list/base';

@injectable()
export class MailTableResource implements ListResource<Mail> {
  get({ batch, page, filters }: ListRequestParams): Observable<ListResponse<Mail>> {
    const searchFilter = filters['search'] || '';
    const data = Array(100)
      .fill(0)
      .map((_, i) => ({
      to: `nice-guy-number-${i}-${searchFilter}`,
      from: 'the-best-world-ever@yandex.ru',
      content: 'lorem ipsum'
    }));
    const sliceData = data.slice((page - 1) * batch, page * batch);

    return of({
      length: data.length,
      data: sliceData
    });
  }
}
