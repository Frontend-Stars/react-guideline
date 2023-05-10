import React, { PropsWithChildren } from 'react';
import { useParams, useLocation } from 'react-router';
import { useInjection } from '@utils/inversify';
import queryString from 'query-string';
import {
  BrowserAddressType,
  QueryParams
} from '@utils/browser/browser-address/types';
import { BrowserAddressToken } from '@utils/browser/browser-address/constants';

export const BrowserAddressAdapter = ({ children }: PropsWithChildren<any>): JSX.Element => {
  const browserAddressService = useInjection<BrowserAddressType>(BrowserAddressToken);
  const params = useParams<QueryParams>();
  const { search } = useLocation();

  browserAddressService.setParams(params);
  browserAddressService.setSearchParams(queryString.parse(search));

  return <>{children}</>;
};
