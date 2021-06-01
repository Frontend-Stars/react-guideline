import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useInjection } from '@utils/inversify';
import { useObservable } from '@utils/rxjs';
import {
  GlobalNavLink,
  GlobalNavToken,
  GlobalNav,
} from './global-nav.type';

const StyledLink = styled(Link)`
  padding: 5px 10px;
`;

export const GlobalNavComponent = (): JSX.Element => {
  const globalNavService = useInjection<GlobalNav>(GlobalNavToken);
  const links = useObservable<GlobalNavLink[]>(globalNavService.links$, []);

  return (
      <nav>
        {links.map(({ path, title }) => (<StyledLink key={path + title} to={path}>{title}</StyledLink>))}
      </nav>
  );
};
