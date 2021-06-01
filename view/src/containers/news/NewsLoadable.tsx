import React from 'react';
import loadable from '@loadable/component';
import { Loading } from '@common/loading';

export const NewsLoadable = loadable(() => import('./News').then((module) => module.News), {
  fallback: <Loading />
});
