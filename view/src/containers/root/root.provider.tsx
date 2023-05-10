import React, { PropsWithChildren } from 'react';
import { useRegistration, useRegistrationConst } from '@utils/inversify';
import { WindowToken } from '@utils/browser/window/constants';
import { TemporaryStorageToken } from '@utils/browser/local-storage/constants';
import { BrowserAddressToken } from '@utils/browser/browser-address/constants';
import { EnvConfigToken } from '@utils/env-config/constants';
import { HttpServiceToken } from '@utils/browser/http/constants';
import { TemporaryStorage } from '@utils/browser/local-storage/types';
import { BrowserAddressType } from '@utils/browser/browser-address/types';
import { EnvConfigService } from '@utils/env-config/env-config.service';
import { HttpService } from '@utils/browser/http/http.service';
import { LocalStorageService } from '@utils/browser/local-storage/local-storage.service';
import { BrowserAddressService } from '@utils/browser/browser-address/browser-address.service';
import { IHttpService } from '@utils/browser/http/types';
import { RootGlobalNavService } from '@utils/nav/root-global-nav.service';
import { UserManagerToken, UserResource, UserResourceToken } from '@utils/user';
import { GlobalNavService, GlobalNavServiceToken } from '@common/global-nav';
import { useAdminProvider } from '@containers/admin/gate/provider';
import { useMailProvider } from '@containers/mail/gate/provider';
import { UserManager } from '@utils/user/user.manager';
import { useRootInitial } from '@containers/root/root.initial';
import { useAdminInitial } from '@containers/admin/gate/initial';
import { useMailInitial } from '@containers/mail/gate/initial';

export const RootProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistrationConst<Window>(WindowToken, window);
  useRegistration<TemporaryStorage>(TemporaryStorageToken, LocalStorageService);
  useRegistration<BrowserAddressType>(BrowserAddressToken, BrowserAddressService);
  useRegistration<EnvConfigService>(EnvConfigToken, EnvConfigService);
  useRegistration<IHttpService>(HttpServiceToken, HttpService);
  useRegistration<GlobalNavService>(GlobalNavServiceToken, RootGlobalNavService);
  useRegistration<UserResource>(UserResourceToken, UserResource);
  useRegistration<UserManager>(UserManagerToken, UserManager);

  useAdminProvider();
  useMailProvider();

  useRootInitial();
  useAdminInitial('/admin');
  useMailInitial('/mail');

  return <>{children}</>;
};
