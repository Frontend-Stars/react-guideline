import { Observable, of } from 'rxjs';
import { injectable } from 'inversify';
import { User } from '@utils/user/types';

@injectable()
export class UserResource {
  getCurrentUser(): Observable<User> {
    return of({
      id: 'test1',
      name: 'user test 1',
      login: 'test1',
    });
  }
}
