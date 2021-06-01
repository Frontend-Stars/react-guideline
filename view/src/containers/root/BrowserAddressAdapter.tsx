import React, { PropsWithChildren } from 'react';
import { useParams } from 'react-router';
import { useInjection } from '@utils/inversify';
import {
  BrowserAddressToken,
  BrowserAddressType,
  QueryParams,
} from './services/browser-address.service';

export const BrowserAddressAdapter = ({ children }: PropsWithChildren<any>): JSX.Element => {
  const browserAddressService = useInjection<BrowserAddressType>(BrowserAddressToken);
  const params = useParams<QueryParams>();

  browserAddressService.setParams(params);

  return <>{children}</>;
};
