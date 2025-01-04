import { HeroSection, TextContainer, Logo, Title, Subtitle, Button, ImageContainer, HeroImage } from "./LandingPage.styled";

const LandingPage = () => {
  return (
    <HeroSection>
      <TextContainer>
        <Title>It's that simple.</Title>
        <Subtitle>Featuring our new spring specials!</Subtitle>
        <Button to="/home">Details</Button>
      </TextContainer>
      <ImageContainer>
        <HeroImage src="/ramen-dish.jpg" alt="Delicious Ramen" />
      </ImageContainer>
    </HeroSection>
  );
};

export default LandingPage;