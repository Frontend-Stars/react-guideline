import React, { PropsWithChildren, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useObservable } from '../rxjs';
import { useInjection } from '../inversify';
import {
  Theme,
  ThemedComponent,
  ThemedComponents
} from './theme.type';
import { DefaultTheme, StyledThemeMap, ThemeManagerToken } from './theme.const';
import { ThemeManager } from './theme.manager';

export const ThemeContext = React.createContext<Theme>(DefaultTheme);

export const ThemeProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  const themeManager = useInjection<ThemeManager>(ThemeManagerToken);
  const theme = useObservable<Theme>(themeManager.theme$, DefaultTheme);
  const styledTheme = StyledThemeMap[theme];

  return (
      <ThemeContext.Provider value={theme}>
        <StyledThemeProvider theme={styledTheme}>
          {children}
        </StyledThemeProvider>
      </ThemeContext.Provider>
  );
}

export const withThemedComponent = (
    componentMap: ThemedComponents,
    DefaultThemeComponent: ThemedComponent
): React.FC => (props: PropsWithChildren<any>): JSX.Element => {
  const themeName = useContext(ThemeContext);
  const ThemedComponent = componentMap[themeName] ?? DefaultThemeComponent;

  return <ThemedComponent {...props} />;
}
