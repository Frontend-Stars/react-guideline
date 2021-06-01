import React from 'react';
import loadable from '@loadable/component';
import { Loading } from '@common/loading';

export const TodoLoadable = loadable(() => import('./Todo').then((module) => module.Todo), {
  fallback: <Loading />
});
