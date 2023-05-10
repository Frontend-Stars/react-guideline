import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '@common/not-found/NotFound';
import { SingleScope } from './pages/single/single.scope';
import { CreateScope } from './pages/create/create.scope';
import { ListScope } from './pages/list/list.scope';
import { ROUTES } from './constants';

export const MailRouter = () => (
    <Routes>
      <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.LIST} replace={true} />} />
      <Route path={ROUTES.NEW} element={<CreateScope />} />
      <Route path={ROUTES.SINGLE_MAIL} element={<SingleScope />} />
      <Route path={ROUTES.LIST} element={<ListScope />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
);
