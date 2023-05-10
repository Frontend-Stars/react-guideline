import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '@common/not-found/NotFound';
import { FeatureListScope } from './pages/feature-list/feature-list.scope';
import { AccessListScope } from './pages/access-list/access-list.scope';
import { ROUTES } from './constants';

export const AdminRouter = () => (
  <Routes>
    <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.RULES} replace={true} />} />
    <Route path={ROUTES.RULES} element={<FeatureListScope />} />
    <Route path={ROUTES.ACCESS} element={<AccessListScope />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
