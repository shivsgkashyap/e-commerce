import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
