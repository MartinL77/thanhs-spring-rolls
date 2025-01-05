import styled from "styled-components";
import colors from "../../colors";

export const StyledNavList = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 10px 20px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 321px) {
    
  }

  @media (min-width: 768px) {
   display: flex;
   justify-content: space-around;
   flex-direction: row;
   position: absolute;
   width: 100%;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1536px) {
  }


`;

export const StyledNavItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.text};
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  height: auto;
`;

export const HamburgerButton = styled.div`
  position: absolute;
  right: 0;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  z-index: 1001;
  cursor: pointer;

  .bar {
    height: 4px;
    width: 100%;
    background-color: ${colors.text};
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .bar-x:nth-child(1) {
    transform: rotate(45deg);
    position: relative;
    top: 10px;
  }

  .bar-x:nth-child(2) {
    opacity: 0;
  }

  .bar-x:nth-child(3) {
    transform: rotate(-45deg);
    position: relative;
    top: -11px;
  }

  @media (min-width: 321px) {
    
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1536px) {
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
  position: fixed;
  top: 0;
  left: -100%; 
  right: 0;
  padding: 20px 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  transition: left 0.3s ease-in-out; 

  ${StyledNavItem} {
    margin: 10px 0;
  }

  @media (min-width: 321px) {
    
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1536px) {
  }
`;
