import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { inject, injectable } from 'inversify';
import { User } from '@utils/user/types';
import {
  UnAuthorizedUser,
  UserInfoTemporaryStorageKey,
  UserResourceToken,
} from '@utils/user/constants';
import { TemporaryStorageToken } from '@utils/browser/local-storage/constants';
import { TemporaryStorage } from '@utils/browser/local-storage/types';
import { UserResource } from '@utils/user/user.resource';

@injectable()
export class UserManager {
  constructor(
      @inject(UserResourceToken) private userResource: UserResource,
      @inject(TemporaryStorageToken) private temporaryStorage: TemporaryStorage,
  ) {}

  init$(): Observable<void> {
    return this.userResource.getCurrentUser().pipe(
        map((user) => {
          this.temporaryStorage.setItem<User>(UserInfoTemporaryStorageKey, user);
        }),
    );
  }

  getCurrentUser$(): Observable<User> {
    return this.temporaryStorage.selectItem<User>(UserInfoTemporaryStorageKey, UnAuthorizedUser);
  }
}
