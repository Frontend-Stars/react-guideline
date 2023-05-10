import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import { useInjection } from '@utils/inversify';
import { useObservable } from '@utils/rxjs';
import {
  GlobalNavLink,
  GlobalNavService,
} from '@common/global-nav/types';
import { GlobalNavServiceToken } from '@common/global-nav/constants';

import styles from './styles.scss';

export const GlobalNavComponent = (): JSX.Element => {
  const globalNavService = useInjection<GlobalNavService>(GlobalNavServiceToken);
  const links = useObservable<GlobalNavLink[]>(globalNavService.links(), []);

  return (
      <nav className={styles.root}>
        {links.map(({ path, title }) =>
            (<NavLink className={({ isActive }) => cx(styles.root__item, { [styles.root__active]: isActive })} key={path + title} to={path}>{title}</NavLink>))}
      </nav>
  );
};
