import { Injectable } from '@nestjs/common';
import { lorem, name, datatype } from 'faker';
import { News } from './latest-news.type';

const genNews = (): News[] => {
  return Array.from(Array(10).keys()).map(() => {
    return {
      id: datatype.uuid(),
      title: name.title(),
      description: lorem.text(),
      body: lorem.text(),
      tags: [
        lorem.word(6),
        lorem.word(6),
        lorem.word(6),
        lorem.word(6),
        lorem.word(6),
      ],
    };
  });
};

@Injectable()
export class LatestNewsService {
  getLatestNews(): News[] {
    return genNews();
  }
}
