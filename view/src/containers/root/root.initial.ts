import { useInjection } from '@utils/inversify';
import { UserManager, UserManagerToken } from '@utils/user';
import { useObservableStateLess } from '@utils/rxjs';

export const useRootInitial = () => {
  const userManager = useInjection<UserManager>(UserManagerToken);

  useObservableStateLess(userManager.init$());
}