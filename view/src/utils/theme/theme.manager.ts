import { inject, injectable } from 'inversify';
import { Theme } from './theme.type';
import { DefaultTheme, ThemeList } from './theme.const';
import type { TemporaryStorage } from '../../containers/root/types/temporary-storage.type';
import { TemporaryStorageToken } from '../../containers/root/types/temporary-storage.type';

@injectable()
export class ThemeManager {
  private storageKey = 'ActiveThemeName'
  theme$ = this.temporaryStorageService.selectItem<Theme>(this.storageKey, DefaultTheme);

  constructor(
    @inject(TemporaryStorageToken) private temporaryStorageService: TemporaryStorage,
  ) {}

  setTheme(theme: ThemeList): void {
    this.temporaryStorageService.setItem<Theme>(this.storageKey, theme);
  }
}
