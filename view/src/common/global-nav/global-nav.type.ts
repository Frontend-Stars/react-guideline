import { Observable } from 'rxjs';

export const GlobalNavToken = Symbol.for('GlobalNav');

export interface GlobalNavLink {
  path: string;
  title: string;
}

export interface GlobalNav {
  links$: Observable<GlobalNavLink[]>;
}
