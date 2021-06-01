import { inject, injectable } from 'inversify';
import { BehaviorSubject, Observable } from 'rxjs';
import { loadingWrapper } from '@utils/rxjs';
import { NewsRaw } from '../types/news.type';
import { HttpService } from '../../root/services/http.service';
import { HttpServiceToken } from '../../root/types/http.type';

export const LatestNewsResourceToken = Symbol.for('LatestNewsResource');

@injectable()
export class LatestNewsResource {
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    @inject(HttpServiceToken) private httpService: HttpService,
  ) {}

  fetch(): Observable<NewsRaw[]> {
    return this.httpService
      .get<NewsRaw[]>('/latest-news')
      .pipe(loadingWrapper(this.loading$));
  }
}
