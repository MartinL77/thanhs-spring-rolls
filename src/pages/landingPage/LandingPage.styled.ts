import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../colors.ts";

export const ImageBackground = styled.div`
  background-color: ${colors.background};
  width: 100%;
  background-image: url('spring-rolls-batch-2.jpg');

  @media (min-width: 321px) {
    
  }

  @media (min-width: 768px) {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: center;
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

export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75.5vh;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23FD5602" fill-opacity="1" d="M0,160L120,133.3C240,107,480,53,720,42.7C960,32,1200,64,1320,80L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path><path fill="%23FE6E00" fill-opacity="1" d="M0,256L120,229.3C240,203,480,149,720,138.7C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path><path fill="%23FF8303" fill-opacity="1" d="M0,320L120,298.7C240,277,480,235,720,218.7C960,203,1200,213,1320,218.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>');
  background-size: cover;
  color: ${colors.text};

  @media (min-width: 321px) {
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 50px 150px;
  }

  @media (min-width: 1024px) {
    padding: 50px 200px;
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1536px) {
  }
`;

export const TextContainer = styled.div`
  margin-top: 100px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  padding-top: 250px;
  color: ${colors.text};
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${colors.text};
`;

export const Button = styled(Link)`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: ${colors.text};
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.background};
  }
`;

export const ImageContainer = styled.div`
  margin-top: 350px;
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 1000px;
  border-radius: 10px;
  border: 4px solid white;
`;
