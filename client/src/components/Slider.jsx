import { ArrowLeftOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.div`
  width: 3rem;
  min-height: 3rem;
  background-color: whitesmoke;
  border-radius: 50%;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow />
      <ArrowLeftOutlined />
      <Arrow />
      <Arrow />
      <ArrowRightOutlined />
      <Arrow />
    </Container>
  );
};

export default Slider;
