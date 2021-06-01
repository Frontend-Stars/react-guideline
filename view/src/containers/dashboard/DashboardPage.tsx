import React from 'react';
import { DashboardProvider } from './DashboardProvider';
import { DashboardLoadable } from './DashboardLoadable';
import { Header } from '@common/layout/header';
import { Content } from '@common/layout/content/Content';
import { Footer } from '@common/layout/footer/Footer';
import { GlobalNavComponent } from '@common/global-nav/GlobalNav';
import { ThemeSwitcher } from '@common/theme-switcher/ThemeSwitcher';
import { withInversifyProvider } from '@utils/inversify';

const DashboardContainer = (): JSX.Element => (
  <DashboardProvider>
    <Header>
      <GlobalNavComponent />
      <ThemeSwitcher />
    </Header>
    <Content>
      <DashboardLoadable />
    </Content>
    <Footer />
  </DashboardProvider>
);

export const DashboardPage = withInversifyProvider(DashboardContainer);
