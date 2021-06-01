import { DarkTheme } from './dark';
import { LightTheme } from './light';
import { MiniTheme } from './mini';

export enum ThemeList {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  MINI = 'MINI',
}

export const DefaultTheme = ThemeList.LIGHT;

export const ThemeManagerToken = Symbol.for('ThemeManager');

export const StyledThemeMap = {
  [ThemeList.LIGHT]: LightTheme,
  [ThemeList.DARK]: DarkTheme,
  [ThemeList.MINI]: MiniTheme
};
