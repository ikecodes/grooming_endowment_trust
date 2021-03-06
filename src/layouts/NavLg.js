import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/Logo.png";
import NavItemLg from "./NavItemLg";
import menus from "../constants/menus";
import { Fade } from "react-reveal";

const NavbarLg = () => {
  return (
    <NavContainer className='position-absolute mt-3'>
      <div className='container'>
        <div className='row'>
          <Fade bottom>
            <div className='col-lg-4'>
              <Link to='/'>
                <Image src={Logo} />
              </Link>
            </div>
            <div className='col-lg-8   mt-3 '>
              <NavMenu>
                <ul className='d-flex justify-content-center gap-5 align-items-center'>
                  {menus.map((menu) => (
                    <NavItemLg key={menu.id} menu={menu} />
                  ))}
                </ul>
              </NavMenu>
            </div>
          </Fade>
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
  width: 11rem;
`;

export default NavbarLg;
