import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 1.25rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 1.25rem;
`;

const FilterText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;
const Select = styled.select``;
const Option = styled.option``;

const ProductList = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
