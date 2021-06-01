import { ChangeEvent } from 'react';
import {
  DefaultTheme,
  Theme,
  ThemeList,
  ThemeManager,
  ThemeManagerToken,
} from '@utils/theme';
import { useInjection } from '@utils/inversify';
import { useObservable } from '@utils/rxjs';

export const ThemeSwitcher = (): JSX.Element => {
  const themeManager = useInjection<ThemeManager>(ThemeManagerToken);
  const selectedTheme = useObservable<Theme>(themeManager.theme$, DefaultTheme);
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value as ThemeList;

    themeManager.setTheme(selectedTheme);
  }

  return (
    <select onChange={onChange} value={selectedTheme}>
      {Object.values(ThemeList).map((theme) => {
        return (<option key={theme} value={theme}>{theme}</option>);
      })}
    </select>
  );
}
