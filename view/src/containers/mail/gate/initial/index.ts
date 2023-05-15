import { useEffect } from 'react';
import { useInjection } from '@utils/inversify';
import { GlobalNavService, GlobalNavServiceToken } from '@common/global-nav';

export const useMailInitial = (rootPath: string) => {
  const navService = useInjection<GlobalNavService>(GlobalNavServiceToken);

  useEffect(() => {
    const mailLink = { title: 'Mail', path: rootPath, order: 100 };

    navService.add(mailLink);

    return () => {
      navService.remove(mailLink);
    }
  }, [navService, rootPath]);
}
