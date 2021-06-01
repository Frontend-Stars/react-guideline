import { Observable, of } from 'rxjs';
import { injectable } from 'inversify';
import {
  GlobalNavLink,
  GlobalNav,
} from '@common/global-nav/global-nav.type';

@injectable()
export class NewsGlobalNavService implements GlobalNav {
  links$: Observable<GlobalNavLink[]> = of([
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/todo',
      title: 'Todo'
    },
    {
      path: '/news',
      title: 'News'
    },
    {
      path: '/news/latest',
      title: 'Latest News'
    }
  ]);
}
