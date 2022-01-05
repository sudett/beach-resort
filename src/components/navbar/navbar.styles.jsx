import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 7rem;
  background-color: var(--offWhite);
  padding: 1.5rem 3rem;
  z-index: 10;

  @media only screen and (max-width: 48em) {
    padding: 1.5rem 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 110rem;
  margin: 0 auto;

  @media only screen and (max-width: 48em) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const ListContainer = styled.div`
  transition: height 0.3s linear;

  @media only screen and (max-width: 48em) {
    order: 2;
    flex: 0 0 100%;
    height: 0;
    overflow: hidden;
  }

  @media only screen and (min-width: 48em) {
    height: auto !important;
    overflow: visible !important;
  }
`;

export const NavList = styled.ul`
  display: flex;
  margin-left: 6rem;

  @media only screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  display: inline-block;
  color: inherit;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 2rem;
  padding: 0 2rem;
  letter-spacing: var(--mainSpacing);
  transition: var(--mainTransition);

  &:hover {
    color: var(--primaryColor);
  }

  @media only screen and (max-width: 48em) {
    padding: 1.25rem 0;
    transform: translateX(-50%);
  }
`;

export const ButtonToggle = styled.button`
  display: none;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  @media only screen and (max-width: 48em) {
    display: block;
  }
`;

export const MenuIcon = styled(RiMenu3Line)`
  width: 3rem;
  height: 3rem;
  fill: var(--primaryColor);
`;
