import { useInjection } from '@utils/inversify';
import { AccessManager, AccessManagerToken } from '@containers/admin/modules/access/managers';
import { useObservableStateLess } from '@utils/rxjs';

export const useAdminAccessInitial = () => {
  const accessManager = useInjection<AccessManager>(AccessManagerToken);

  useObservableStateLess(accessManager.init$());
}
