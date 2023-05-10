import React, { PropsWithChildren, useEffect } from 'react';
import { useInjection, useRegistration } from '@utils/inversify';
import { HorizontalNavService, HorizontalNavServiceToken } from '@common/horizontal-nav';
import { AccessHorizontalNavService } from '@containers/admin/modules/access/services/horizontal-nav.service';
import { ROUTES } from '@containers/admin/constants';

export const AdminProvider = ({ children }: PropsWithChildren<any>): JSX.Element => {
  useRegistration<HorizontalNavService>(HorizontalNavServiceToken, AccessHorizontalNavService);

  const service = useInjection<HorizontalNavService>(HorizontalNavServiceToken);

  useEffect(() => {
    service.add({ title: 'Features', path: `../${ROUTES.RULES}` });
    service.add({ title: 'Rules', path: `../${ROUTES.ACCESS}` });

    return () => {
      service.remove({ title: 'Features', path: `../${ROUTES.RULES}` });
      service.remove({ title: 'Rules', path: `../${ROUTES.ACCESS}` });
    };
  }, [service]);

  return <>{children}</>;
};
