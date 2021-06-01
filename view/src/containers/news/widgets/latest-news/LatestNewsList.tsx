import React from 'react';
import { useInjection } from '@utils/inversify';
import { useObservable } from '@utils/rxjs';
import { Loading } from '@common/loading';
import {
  LatestNewsService,
  LatestNewsServiceToken,
} from '../../services/latest-news.service';
import { NewsList } from '../../components/news-list/NewsList';
import { News } from '../../types/news.type';
import {
  LatestNewsResource,
  LatestNewsResourceToken,
} from '../../resources/latest-news.resource';

export const LatestNewsList = (): JSX.Element => {
  const latestNewsService = useInjection<LatestNewsService>(LatestNewsServiceToken);
  const latestNewsResource = useInjection<LatestNewsResource>(LatestNewsResourceToken);
  const news = useObservable<News[]>(latestNewsService.news$, []);
  const loading = useObservable<boolean>(latestNewsResource.loading$, true);

  return (
      loading ? <Loading /> : <NewsList news={news} />
  );
}
