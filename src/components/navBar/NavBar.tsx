import { Link } from "react-router-dom";
import { StyledLogo, StyledNavItem, StyledNavList } from "./NavBar.styled";

const NavBar = () => {
  return (
    <>
      <StyledNavList>
        <StyledNavItem>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
            About Us
          </Link>
        </StyledNavItem>
        <StyledLogo src="/thanhs-spring-rolls-logo.svg"></StyledLogo>
        <StyledNavItem>
          <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
            Products
          </Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to="/recipes" style={{ textDecoration: "none", color: "inherit" }}>
            Recipes & Tips
          </Link>
        </StyledNavItem>
      </StyledNavList>
    </>
  );
};

export default NavBar;
