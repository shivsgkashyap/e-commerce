import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
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

const Description = styled.p`
  margin: 1.25rem 0rem;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 2.5rem;
  min-height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const Title = styled.h2`
  margin-bottom: 1.875rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.625rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.25rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: bottom;
`;

const Payment = styled.img`
  width: 50%;
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
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Womens Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "0.625rem" }} />
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "0.625rem" }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "0.625rem" }} />
          contact@cutandsew.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
