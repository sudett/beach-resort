import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../images/logo.svg";

import { NavbarContainer, Container, ListContainer, NavList, NavLink, ButtonToggle, MenuIcon } from "./navbar.styles";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const navList = useRef(null);
  const listContainer = useRef(null);

  // Toggle navbar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    const navHeight = navList.current.getBoundingClientRect().height;
    listContainer.current.style.height = isNavOpen ? `${navHeight}px` : 0;
    listContainer.current.style.overflow = isNavOpen ? "visible" : "hidden";
  };

  return (
    <NavbarContainer>
      <Container>
        <Link to="/">
          <Logo />
        </Link>

        <ListContainer ref={listContainer}>
          <NavList ref={navList}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rooms">Rooms</NavLink>
            </li>
          </NavList>
        </ListContainer>

        <ButtonToggle onClick={toggleNav}>
          <MenuIcon />
        </ButtonToggle>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
