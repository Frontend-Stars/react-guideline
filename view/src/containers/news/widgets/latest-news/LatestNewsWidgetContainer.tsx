import React from 'react';
import { useInjection } from '@utils/inversify';
import { useObservableStateLess } from '@utils/rxjs';
import {
  LatestNewsManager,
  LatestNewsManagerToken,
} from '../../managers/latest-news.manager';
import { News } from '../../types/news.type';
import { LatestNewsList } from './LatestNewsList';

export const LatestNewsWidgetContainer = (): JSX.Element => {
  const latestNewsManger = useInjection<LatestNewsManager>(LatestNewsManagerToken);

  useObservableStateLess<News[]>(latestNewsManger.fetch());

  return (
      <LatestNewsList />
  );
};
