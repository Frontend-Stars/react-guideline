import {
  useAdminAccessInitial
} from '@containers/admin/modules/access/initials/access.initial';
import {
  useAdminMenuInitial
} from '@containers/admin/modules/access/initials/menu.initial';

export const useAdminInitial = (rootPath: string) => {
  useAdminAccessInitial();
  useAdminMenuInitial(rootPath);
}
