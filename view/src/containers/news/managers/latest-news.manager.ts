import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { News } from '../types/news.type';
import {
  LatestNewsResource,
  LatestNewsResourceToken,
} from '../resources/latest-news.resource';
import {
  LatestNewsMapper,
  LatestNewsMapperToken,
} from '../mappers/latest-news.mapper';
import {
  LatestNewsService,
  LatestNewsServiceToken,
} from '../services/latest-news.service';

export const LatestNewsManagerToken = Symbol.for('LatestNewsManager');

@injectable()
export class LatestNewsManager {
  constructor(
      @inject(LatestNewsResourceToken) private latestNewsResource: LatestNewsResource,
      @inject(LatestNewsMapperToken) private latestNewsMapper: LatestNewsMapper,
      @inject(LatestNewsServiceToken) private latestNewsService: LatestNewsService,
  ) {}

  fetch(): Observable<News[]> {
    return this.latestNewsResource.fetch()
      .pipe(
          map((newsRaw) => this.latestNewsMapper.map(newsRaw)),
          tap((news) => this.latestNewsService.setData(news))
      );
  }
}
