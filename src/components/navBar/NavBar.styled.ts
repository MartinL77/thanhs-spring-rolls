import styled from "styled-components";

export const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #a00000; 
  padding: 10px 20px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const StyledNavItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

    &:hover {
        color: blue;
    }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const StyledLogo = styled.img`
    width: 200px;
    height: 200px;
`