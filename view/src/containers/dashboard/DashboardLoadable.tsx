import React from 'react';
import loadable from '@loadable/component';
import { Loading } from '@common/loading';

export const DashboardLoadable = loadable(() => import('./Dashboard').then((module) => module.Dashboard), {
  fallback: <Loading />
});
