import React, { PropsWithChildren } from 'react';
import { useRegistration } from '@utils/inversify';
import {
  GlobalNavToken,
  GlobalNav,
} from '@common/global-nav/global-nav.type';
import { NewsGlobalNavService } from './services/news-global-nav.service';

export const NewsProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistration<GlobalNav>(GlobalNavToken, NewsGlobalNavService);

  return <>{children}</>;
};
