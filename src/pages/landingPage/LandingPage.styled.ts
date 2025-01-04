import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 579px;
  background-color: #a00000; /* Deep red background */
  padding: 50px;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const Button = styled(Link)`
  padding: 10px 20px;
  background-color: #ffcc00; /* Bright yellow button */
  color: #000;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #a00000;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
`;
