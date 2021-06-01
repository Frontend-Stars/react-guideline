import React from 'react';
import { TodoProvider } from './TodoProvider';
import { TodoLoadable } from './TodoLoadable';
import { Header } from '@common/layout/header';
import { Content } from '@common/layout/content/Content';
import { Footer } from '@common/layout/footer/Footer';
import { GlobalNavComponent } from '@common/global-nav/GlobalNav';
import { ThemeSwitcher } from '@common/theme-switcher/ThemeSwitcher';
import { withInversifyProvider } from '@utils/inversify';

const TodoContainer = (): JSX.Element => (
    <TodoProvider>
      <Header>
        <GlobalNavComponent />
        <ThemeSwitcher />
      </Header>
      <Content>
        <TodoLoadable />
      </Content>
      <Footer />
    </TodoProvider>
);

export const TodoPage = withInversifyProvider(TodoContainer);
