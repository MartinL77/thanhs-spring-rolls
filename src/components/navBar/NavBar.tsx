import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledLogo, StyledNavItem, StyledNavList, HamburgerButton, Menu } from "./NavBar.styled";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <StyledNavList>
        <StyledNavItem>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/menu" style={{ textDecoration: "none", color: "inherit" }}>
            Menu
          </Link>
        </StyledNavItem>
        <StyledLogo src="/thanhs-spring-rolls-og-logo.svg" alt="Company Logo" />
        <StyledNavItem>
          <Link to="/offers" style={{ textDecoration: "none", color: "inherit" }}>
            Offers
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
            Contact Us
          </Link>
        </StyledNavItem>
      </StyledNavList>

      <HamburgerButton onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'bar-x' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'bar-x' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'bar-x' : ''}`} />
      </HamburgerButton>

      <Menu style={{ left: isMenuOpen ? '0' : '-100%' }}>
        <StyledNavItem>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/menu" style={{ textDecoration: "none", color: "inherit" }}>
            About
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/product" style={{ textDecoration: "none", color: "inherit" }}>
            Products
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
            Contact Us
          </Link>
        </StyledNavItem>
      </Menu>
      </>
  );
};

export default NavBar;
