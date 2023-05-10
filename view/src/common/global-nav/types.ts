import { Observable } from 'rxjs';
import { AccessRule } from '@containers/admin/modules/access/access.const';

export interface GlobalNavLink {
  path: string;
  title: string;
  order?: number;
  rules?: AccessRule[];
}

export interface GlobalNavService {
  links(): Observable<GlobalNavLink[]>;
  add(link: GlobalNavLink): void;
  remove(link: GlobalNavLink): void;
}
