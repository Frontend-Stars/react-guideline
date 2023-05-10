import { injectable } from 'inversify';
import { AccessRule } from '@containers/admin/modules/access/access.const';

@injectable()
export class AccessService {
  has(userRules: AccessRule[], definedRules: AccessRule[]): boolean {
    return definedRules.length
        ? definedRules.reduce<boolean>((acc, rule) =>
            acc || userRules.includes(rule), false)
        : true;
  }
}
