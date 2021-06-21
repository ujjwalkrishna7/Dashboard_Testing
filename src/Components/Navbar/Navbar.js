import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Nav = styled.div`
  background-color: var(--black);
  color: var(--white);
  font-size: 1rem;
  position: absolute;
  top: -10px;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  z-index: 10;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-in-out;
  }
`;

const NavbarContainer = styled.div`
  position: relative;
  top: 5px;
  display: flex;
  justify-content: space-between;
  height: 65px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

const NavLogo = styled(Link)`
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 50px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileSideButton = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    cursor: pointer;
    color: var(--white);
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  height: 65px;
  margin-right: -20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: var(--primary);
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: var(--black);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--primary-dark);
    color: var(--black);
  }
`;

const ProfilePhoto = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  margin: 8px;
  border-radius: 100%;
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">ProInsights</NavLogo>
        <MobileSideButton onClick={toggle}>
          <FaBars />
        </MobileSideButton>
        <NavMenu>
          <NavItem>
            <NavLinks to="/account">
              <ProfilePhoto src="https://wallpaperaccess.com/full/2213424.jpg" />
              Account
            </NavLinks>
          </NavItem>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
