import { inject, injectable } from 'inversify';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpServiceToken } from '@utils/browser/http/constants';
import { HttpService } from '@utils/browser/http/http.service';
import { loadingWrapper } from '@utils/rxjs';
import { CreateRequest, CreateResponse } from './types';

@injectable()
export class CreateResource {
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(
      @inject(HttpServiceToken) private httpService: HttpService,
  ) {}

  create(data: CreateRequest): Observable<CreateResponse> {
    return this.httpService
      .get<CreateRequest, CreateResponse>('/mail/create', data)
      .pipe(loadingWrapper(this.loading$));
  }
}
