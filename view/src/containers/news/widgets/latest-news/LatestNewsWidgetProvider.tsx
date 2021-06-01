import React, { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';
import {
  LatestNewsService,
  LatestNewsServiceToken,
} from '../../services/latest-news.service';
import {
  LatestNewsResource,
  LatestNewsResourceToken,
} from '../../resources/latest-news.resource';
import {
  LatestNewsMapper,
  LatestNewsMapperToken,
} from '../../mappers/latest-news.mapper';
import {
  LatestNewsManager,
  LatestNewsManagerToken,
} from '../../managers/latest-news.manager';

export const LatestNewsWidgetProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistration<LatestNewsService>(LatestNewsServiceToken, LatestNewsService);
  useRegistration<LatestNewsResource>(LatestNewsResourceToken, LatestNewsResource);
  useRegistration<LatestNewsMapper>(LatestNewsMapperToken, LatestNewsMapper);
  useRegistration<LatestNewsManager>(LatestNewsManagerToken, LatestNewsManager);

  return <>{children}</>;
};
