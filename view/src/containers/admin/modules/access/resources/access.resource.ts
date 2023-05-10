import { injectable } from 'inversify';
import { Observable, of } from 'rxjs';
import { AccessRule } from '@containers/admin/modules/access/access.const';

@injectable()
export class AccessResource {
  getRules(userId: string): Observable<AccessRule[]> {
    switch (userId) {
      case 'test1':
        return of([AccessRule.MANAGER]);
      case 'test2':
        return of([AccessRule.SPECIAL]);
      case 'super':
        return of([AccessRule.SUPER]);
      default:
        return of([]);
    }
  }
}
