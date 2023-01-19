import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 1.25rem;
  background-color: white;
  border-radius: 1rem;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 200;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.625rem 0;
  padding: 0.625rem;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1rem 1.25rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 0.625rem;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 0.3rem 0rem;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>FORGOT YOUR PASSWORD?</Link>
          <Link>DON'T HAVE AN ACCOUNT? REGISTER HERE</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;