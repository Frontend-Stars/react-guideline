import React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { useInjection } from '@utils/inversify';
import { useObservable } from '@utils/rxjs';
import { HorizontalNavLink, HorizontalNavService, HorizontalNavServiceToken } from '@common/horizontal-nav';

import styles from './styles.scss';

export const HorizontalNavComponent = (): JSX.Element => {
  const navService = useInjection<HorizontalNavService>(HorizontalNavServiceToken);
  const links = useObservable<HorizontalNavLink[]>(navService.links(), []);

  return (
      <nav className={styles.root}>
        {links.map(({ path, title }) =>
            (<NavLink className={({ isActive }) => cx(styles.root__item, { [styles.root__active]: isActive })} key={path + title} to={path}>{title}</NavLink>))}
      </nav>
  );
};
