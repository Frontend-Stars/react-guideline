import { inject, injectable } from 'inversify';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpServiceToken } from '@utils/browser/http/constants';
import { HttpService } from '@utils/browser/http/http.service';
import { loadingWrapper } from '@utils/rxjs';

import { EditRequest, EditResponse } from './types';

@injectable()
export class EditResource {
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(
      @inject(HttpServiceToken) private httpService: HttpService,
  ) {}

  update(data: EditRequest): Observable<EditResponse> {
    return this.httpService
      .update<EditRequest, EditResponse>('/feature/edit', data)
      .pipe(loadingWrapper(this.loading$));
  }
}
