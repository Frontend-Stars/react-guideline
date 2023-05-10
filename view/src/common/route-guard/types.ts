import { AccessRule } from '@containers/admin/modules/access/access.const';

export type RouteGuardProps = {
  rule: AccessRule[],
  fallbackPath: string;
};
