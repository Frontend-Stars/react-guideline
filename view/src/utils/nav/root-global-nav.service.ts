import { inject, injectable } from 'inversify';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalNavLink, GlobalNavService } from '@common/global-nav';
import { AccessManager, AccessManagerToken } from '@containers/admin/modules/access/managers';

@injectable()
export class RootGlobalNavService implements GlobalNavService {
  private links$: BehaviorSubject<GlobalNavLink[]> = new BehaviorSubject<GlobalNavLink[]>([]);

  constructor(
      @inject(AccessManagerToken) private accessManager: AccessManager,
  ) {}

  links(): Observable<GlobalNavLink[]> {
    return this.links$.pipe(
        map((links) => {
          return links
            .sort((
                { order: orderA = 0 },
                { order: orderB = 0 }
            ) => orderA > orderB ? 1 : -1)
            .filter(({ rules = [] }) => this.accessManager.has(rules));
        }),
    );
  }

  add(link: GlobalNavLink): void {
    this.links$.next([...this.links$.value, link]);
  }

  remove(link: GlobalNavLink): void {
    const links = this.links$.value.filter((item) => item.path !== link.path);

    this.links$.next(links);
  }
}
