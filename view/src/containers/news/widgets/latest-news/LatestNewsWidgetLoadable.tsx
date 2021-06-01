import React from 'react';
import loadable from '@loadable/component';
import { Loading } from '@common/loading';

export const LatestNewsWidgetLoadable = loadable(() => import('./LatestNewsWidget').then((module) => module.LatestNewsWidget), {
  fallback: <Loading />
});
