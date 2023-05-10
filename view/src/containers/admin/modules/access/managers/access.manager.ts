import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserManager, UserManagerToken } from '@utils/user';
import { AccessRule } from '@containers/admin/modules/access/access.const';
import { AccessService, AccessServiceToken } from '@containers/admin/modules/access/services';
import { AccessResource, AccessResourceToken } from '@containers/admin/modules/access/resources';
import { TemporaryStorageToken } from '@utils/browser/local-storage/constants';
import { TemporaryStorage } from '@utils/browser/local-storage/types';
import { AccessRulesTemporaryStorageKey } from '@containers/admin/modules/access/managers';

@injectable()
export class AccessManager {
  constructor(
      @inject(UserManagerToken) private userManager: UserManager,
      @inject(TemporaryStorageToken) private temporaryStorage: TemporaryStorage,
      @inject(AccessServiceToken) private accessService: AccessService,
      @inject(AccessResourceToken) private accessResource: AccessResource,
  ) {}

  init$(): Observable<void> {
    return this.userManager.getCurrentUser$().pipe(
      switchMap((user) => {
        return this.accessResource.getRules(user.id);
      }),
      map((userRules) => {
        this.temporaryStorage.setItem<AccessRule[]>(AccessRulesTemporaryStorageKey, userRules);
      })
    );
  }

  has$(definedRules: AccessRule[]): Observable<boolean> {
    return this.temporaryStorage.selectItem<AccessRule[]>(AccessRulesTemporaryStorageKey, [])
      .pipe(
        map((userRules) => {
          return this.accessService.has(userRules, definedRules);
        }),
    );
  }

  has(definedRules: AccessRule[]): boolean {
    const userRules = this.temporaryStorage.getItem<AccessRule[]>(AccessRulesTemporaryStorageKey, []);

    return this.accessService.has(userRules, definedRules);
  }
}
