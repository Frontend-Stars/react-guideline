import React from 'react';
import { NewsProvider } from './NewsProvider';
import { NewsLoadable } from './NewsLoadable';
import { Header } from '@common/layout/header';
import { Content } from '@common/layout/content/Content';
import { Footer } from '@common/layout/footer/Footer';
import { GlobalNavComponent } from '@common/global-nav/GlobalNav';
import { ThemeSwitcher } from '@common/theme-switcher/ThemeSwitcher';
import { withInversifyProvider } from '@utils/inversify';

const NewsContainer = (): JSX.Element => (
    <NewsProvider>
      <Header>
        <GlobalNavComponent />
        <ThemeSwitcher />
      </Header>
      <Content>
        <NewsLoadable />
      </Content>
      <Footer />
    </NewsProvider>
);

export const NewsPage = withInversifyProvider(NewsContainer);
