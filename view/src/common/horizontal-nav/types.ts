import { Observable } from 'rxjs';

export interface HorizontalNavLink {
  path: string;
  title: string;
}

export interface HorizontalNavService {
  links(): Observable<HorizontalNavLink[]>;
  add(link: HorizontalNavLink): void;
  remove(link: HorizontalNavLink): void;
}
