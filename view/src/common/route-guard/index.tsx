import React from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import { useInjection } from '@utils/inversify';
import {
  AccessManager
} from '@containers/admin/modules/access/managers/access.manager';
import {
  AccessManagerToken
} from '@containers/admin/modules/access/managers/constants';
import { RouteGuardProps } from '@common/route-guard/types';

export const RouteGuard = ({ rule, fallbackPath = '/' }: RouteGuardProps) => {
  const location = useLocation();
  const manager = useInjection<AccessManager>(AccessManagerToken);

  return manager.has(rule) ? <Outlet /> : <Navigate to={fallbackPath} state={{ from: location }} />;
}