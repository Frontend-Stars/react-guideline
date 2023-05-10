import { Injectable } from '@nestjs/common';
import { lorem, name, datatype } from 'faker';
import { Application, ApplicationResponse } from './application.type';

const genNew = (id?: string): Application => ({
  id: id ?? datatype.uuid(),
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
});

const genNews = (): Application[] =>
  Array.from(Array(10).keys()).map(() => genNew());

@Injectable()
export class AccessService {
  getApplications(): ApplicationResponse {
    return {
      data: genNews(),
      page: 1,
      pages: 1,
    };
  }

  getApplication(id: string): Application {
    return genNew(id);
  }
}
