import { User } from '@utils/user/types';

export const UserResourceToken = Symbol.for('UserResource');
export const UserManagerToken = Symbol.for('UserManager');
export const UserInfoTemporaryStorageKey = 'user-info-data';
export const UnAuthorizedUser: User = {
  id: 'nope',
  login: 'not-auth',
  name: 'NotAuth',
}
