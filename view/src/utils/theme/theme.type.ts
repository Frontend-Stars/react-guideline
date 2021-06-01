import { ComponentType, PropsWithChildren } from 'react';
import { ThemeList } from './theme.const';

export type Theme = ThemeList;

export interface StyledTheme {
  palette: {
    primary: string;
  };
}

export type ThemedComponent = ComponentType<PropsWithChildren<any>>;

export type ThemedComponents = {
  [key in ThemeList]?: ThemedComponent;
}
