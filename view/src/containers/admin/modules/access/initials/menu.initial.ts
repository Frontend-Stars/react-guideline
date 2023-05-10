import { useEffect } from 'react';
import { useInjection } from '@utils/inversify';
import {
  GlobalNavLink,
  GlobalNavService,
  GlobalNavServiceToken,
} from '@common/global-nav';
import { ADMIN_ACCESS_RULES } from '@containers/admin/gate/const';

export const useAdminMenuInitial = (rootPath: string) => {
  const service = useInjection<GlobalNavService>(GlobalNavServiceToken);

  useEffect(() => {
    const adminLink: GlobalNavLink = {
      title: 'Admin Panel',
      path: rootPath,
      rules: ADMIN_ACCESS_RULES,
      order: 200,
    };

    service.add(adminLink);

    return () => {
      service.remove(adminLink);
    };
  }, [service]);
}
