import React, { PropsWithChildren } from 'react';
import { useRegistration, useRegistrationConst } from '@utils/inversify';
import { ThemeManager, ThemeManagerToken } from '@utils/theme';
import {
  GlobalNavToken,
  GlobalNav,
} from '@common/global-nav/global-nav.type';
import {
  TemporaryStorage,
  TemporaryStorageToken,
} from './types/temporary-storage.type';
import { WindowToken } from './types/window.type';
import {
  LocalStorageService,
} from './services/local-storage.service';
import {
  BrowserAddressService,
  BrowserAddressToken,
  BrowserAddressType,
} from './services/browser-address.service';
import { RootGlobalNavService } from './services/global-nav.service';
import { EnvConfigToken } from './types/env-config.type';
import { EnvConfigService } from './services/env-config.service';
import { HttpServiceToken } from './types/http.type';
import { HttpService } from './services/http.service';

export const RootProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistrationConst<Window>(WindowToken, window);
  useRegistration<TemporaryStorage>(TemporaryStorageToken, LocalStorageService);
  useRegistration<BrowserAddressType>(BrowserAddressToken, BrowserAddressService);
  useRegistration<ThemeManager>(ThemeManagerToken, ThemeManager);
  useRegistration<GlobalNav>(GlobalNavToken, RootGlobalNavService);
  useRegistration<EnvConfigService>(EnvConfigToken, EnvConfigService);
  useRegistration<HttpService>(HttpServiceToken, HttpService);

  return <>{children}</>;
};
