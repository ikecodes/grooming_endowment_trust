import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/images/logo-placeholder.png';
import NavItemLg from './NavItemLg';

const NavbarLg = () => {
  return (
    <NavContainer className='position-absolute mt-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <Link to='/'>
              <Image src={Logo} />
            </Link>
          </div>
          <div className='col-lg-8 justify-self-start mt-3'>
            <NavMenu>
              <ul className='d-flex justify-content-evenly align-items-center'>
                <NavItemLg name='about' />
                <NavItemLg name='portfolio' />
                <NavItemLg name='grants' />
                <NavItemLg name='news' />
              </ul>
            </NavMenu>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  z-index: 90;
`;
const NavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img`
  height: auto;
  width: 6rem;
`;

export default NavbarLg;
