import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout } from "../redux/userRedux";

const Container = styled.nav`
  min-height: 4rem;
  ${mobile({ minHeight: "3rem" })}
`;

const Wrapper = styled.div`
  padding: 0.6rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "0.6rem 0rem" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 0.85rem;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0.3rem;
  ${mobile({ marginLeft: "0.625rem" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "3.75rem" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ marginLeft: "0.625rem" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  ${mobile({ fontSize: "1.5rem" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: "flex-start" })}
`;

const MenuItem = styled.div`
  font-size: 0.85;
  cursor: pointer;
  margin-left: 1.5rem;
  ${mobile({ fontSize: "0.75rem", marginLeft: "0.625rem" })}
`;
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const quantity = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (searchValue) {
      navigate(`/products/${searchValue}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              onKeyPress={handleKeyPress}
            />
            <Search
              style={{ color: "gray", fontSize: "1rem", cursor: "pointer" }}
              onClick={() => handleClick()}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>CUT&SEW.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          {user ? (
            <MenuItem onClick={handleLogout}>SIGN OUT</MenuItem>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
