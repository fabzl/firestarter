import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import logo from './logo_main_white.svg';

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  align-items: center;
  z-index: 900;
  flex-direction: row;
  display: flex;
  /* justify-content: space-around; */
`;

const LinkTo = styled(NavLink)`
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  &.active,
  &:hover {
    font-weight: bold;
    color: red;
  }
`;

const LogoContainer = styled.div`
  margin-right: auto;
`;

const Logo = styled.img`
  width: 80%;
`;

export default () => (
  <Nav>
    <LogoContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </LogoContainer>

    <LinkTo to="/work">Work</LinkTo>

    <LinkTo to="/bla">About</LinkTo>

    <LinkTo to="/blo">Contact</LinkTo>
  </Nav>
);
