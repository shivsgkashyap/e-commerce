import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem 1.25rem 1.25rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1.25rem;
  padding-left: 1.25rem;
  color: teal;
`;

const Button = styled.button`
  border: 1px solid teal;
  padding: 1rem;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  width: 50%;
  align-self: center;
  margin-bottom: 2rem;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Title>FEATURED PRODUCTS:</Title>
      <ProductContainer>
        {products.slice(0, 8).map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </ProductContainer>
      <Button onClick={handleClick}>VIEW ALL PRODUCTS</Button>
    </Container>
  );
};

export default Products;
