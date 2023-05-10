import { injectable } from 'inversify';
import { BehaviorSubject, Observable } from 'rxjs';
import { HorizontalNavLink, HorizontalNavService } from '@common/horizontal-nav';

@injectable()
export class AccessHorizontalNavService implements HorizontalNavService {
  private links$: BehaviorSubject<HorizontalNavLink[]> = new BehaviorSubject<HorizontalNavLink[]>([]);

  links(): Observable<HorizontalNavLink[]> {
    return this.links$;
  }

  add(link: HorizontalNavLink): void {
    this.links$.value.push(link);
    this.links$.next(this.links$.value);
  }

  remove(link: HorizontalNavLink): void {
    this.links$.value.filter((item) => item.path !== link.path);
    this.links$.next(this.links$.value);
  }
}