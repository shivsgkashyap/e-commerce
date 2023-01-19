import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

const Logo = styled.h1``;

const Description = styled.p``;

const SocialContainer = styled.div``;

const SocialIcon = styled.div``;

const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.25rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CUT&SEW.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          doloremque modi vero asperiores nesciunt. Sequi provident id corrupti?
          Exercitationem veritatis laudantium dolor dolore sint vero ipsum rem
          autem voluptates assumenda.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
