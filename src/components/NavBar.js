import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Link from './Link';
import Count from './Count';

const NavWrapper = styled.nav`
  text-align: center;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  padding: .75rem;
  margin-bottom: 0.5em;
  font-size: 1.15rem;
  box-shadow: 0 8px 6px -6px #999;
`;

const NavBar = (props) => (
  <NavWrapper>
    <Link to="/">
      <Count filter="active" />
      Active
    </Link>
    <Link to="/completed">
      <Count filter="completed" />
      Complete
    </Link>
    <Link to="/all">
      <Count filter="all" />
      All
    </Link>
  </NavWrapper>
);

export default NavBar;
