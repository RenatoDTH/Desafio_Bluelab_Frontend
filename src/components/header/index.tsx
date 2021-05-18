/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../index';

import { Container, NavBar } from './styles';

const Header: React.FC = () => {
  return (
    <Container data-testid="header">
      <Logo />
      <NavBar>
        <label htmlFor="hamburgerMenu">&#9776;</label>
        <input type="checkbox" id="hamburgerMenu" />

        <div id="items">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/usercreation">
            <span>Criação de Usuário</span>
          </Link>
        </div>
      </NavBar>
    </Container>
  );
};

export default memo(Header);
