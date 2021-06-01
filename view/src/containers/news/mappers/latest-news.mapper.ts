import { injectable } from 'inversify';
import { News, NewsRaw } from '../types/news.type';

export const LatestNewsMapperToken = Symbol.for('LatestNewsMapper');

@injectable()
export class LatestNewsMapper {
  map(news: NewsRaw[]): News[] {
    return news;
  }
}
