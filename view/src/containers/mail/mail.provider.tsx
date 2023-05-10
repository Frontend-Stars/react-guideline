import React, { PropsWithChildren, useEffect } from 'react';
import { useInjection, useRegistration } from '@utils/inversify';
import { HorizontalNavService, HorizontalNavServiceToken } from '@common/horizontal-nav';
import { MailHorizontalNavService } from '@containers/mail/services/horizontal-nav.service';
import { ROUTES } from './constants';

export const MailProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistration<HorizontalNavService>(HorizontalNavServiceToken, MailHorizontalNavService);

  const service = useInjection<HorizontalNavService>(HorizontalNavServiceToken);

  useEffect(() => {
    const newMail = { title: 'New Mail', path: `../${ROUTES.NEW}` };
    const listMail = { title: 'List Mail', path: `../${ROUTES.LIST}` };

    service.add(newMail);
    service.add(listMail);

    return () => {
      service.remove(newMail);
      service.remove(listMail);
    };
  }, [service]);

  return <>{children}</>;
};
