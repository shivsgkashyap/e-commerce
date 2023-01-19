import styled from "styled-components";

const Container = styled.div`
  min-height: 2rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders over $50</Container>;
};

export default Announcement;
