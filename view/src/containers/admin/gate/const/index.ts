import { AccessRule } from '@containers/admin/modules/access/access.const';

export * from '../../modules/access/access.const';

export const ADMIN_ACCESS_RULES = [
  AccessRule.SUPER,
  AccessRule.MANAGER,
];
