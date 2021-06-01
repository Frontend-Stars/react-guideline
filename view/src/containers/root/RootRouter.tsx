import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@utils/theme';
import { NotFound } from '@common/not-found/NotFound';
import { RootProvider } from './RootProvider';
import { BrowserAddressAdapter } from './BrowserAddressAdapter';
import { DashboardPage } from '../dashboard/DashboardPage';
import { NewsPage } from '../news/NewsPage';
import { TodoPage } from '../todo/TodoPage';

export const RootRouter = (): JSX.Element => (
  <RootProvider>
    <ThemeProvider>
      <BrowserRouter>
        <BrowserAddressAdapter>
          <Switch>
            <Route path="/news" children={<NewsPage />} />
            <Route path="/todo" children={<TodoPage />} />
            <Route exact path="/" children={<DashboardPage />} />
            <Route children={<NotFound />} />
          </Switch>
        </BrowserAddressAdapter>
      </BrowserRouter>
    </ThemeProvider>
  </RootProvider>
);
