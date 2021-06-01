import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Header = ({ className, children }: PropsWithChildren<any>): JSX.Element => (
  <header className={className}>
    <div>{children}</div>
    <p>I'm mini header</p>
  </header>
);

export const HeaderMini = styled(Header)`
  background: ${(props) => props.theme.palette.primary};
  height: 50px;
`;
