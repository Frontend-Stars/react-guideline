import { injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';
import { News } from '../types/news.type';

export const LatestNewsServiceToken = Symbol.for('LatestNewsService');

@injectable()
export class LatestNewsService {
  news$ = new BehaviorSubject<News[]>([]);

  setData(news: News[]): void {
    this.news$.next(news);
  }
}
