import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteGuard } from '@common/route-guard';
import { NotFound } from '@common/not-found/NotFound';
import { Forbidden } from '@common/forbidden/Forbidden';
import { AdminScope } from '@containers/admin/admin.scope';
import { MailScope } from '@containers/mail/mail.scope';
import { ADMIN_ACCESS_RULES } from '@containers/admin/gate/const';
import { MAIL_ACCESS_RULES } from '@containers/mail/gate/const';

export const RootRouter = (): JSX.Element => (
  <Routes>
    <Route element={<RouteGuard fallbackPath={'/forbidden'} rule={MAIL_ACCESS_RULES} />}>
      <Route path="mail/*" element={<MailScope />} />
    </Route>

    <Route element={<RouteGuard fallbackPath={'/forbidden'} rule={ADMIN_ACCESS_RULES} />}>
      <Route path={'admin/*'} element={<AdminScope />} />
    </Route>

    <Route path="forbidden" element={<Forbidden />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
