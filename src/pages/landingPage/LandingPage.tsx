import {
  HeroSection,
  TextContainer,
  Title,
  Subtitle,
  Button,
  ImageContainer,
  HeroImage,
  ImageBackground,
} from "./LandingPage.styled";

const LandingPage = () => {
  return (
    <ImageBackground>
    <HeroSection>
      <TextContainer>
        <Title>Thanh's Home Made Spring Rolls</Title>
        <Subtitle>
        Crafted to absolute perfection with motherly love.
        </Subtitle>
        {/* <Button to="/home">Explore Now</Button> */}
      </TextContainer>
      <ImageContainer>
        <HeroImage src="/thanh-spring-rolls-collage.jpg" alt="Delicious Ramen Dish" />
      </ImageContainer>
    </HeroSection>
    </ImageBackground>
  );
};

export default LandingPage;
