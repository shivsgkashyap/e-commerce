import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethods";
import { useState } from "react";

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 40%;
  padding: 1.25rem;
  background-color: white;
  border-radius: 1rem;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${mobile({ width: "100%" })}
`;
const FieldError = styled.span`
  color: red;
  font-size: 0.8rem;
  min-height: 1rem;
  margin: 0.5rem 0rem;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.5rem 0.625rem 0rem 0rem;
  padding: 1.25rem;
  border: 0.5px solid black;
  outline: none;
  ${mobile({ padding: "0.75rem" })}
`;

const Agreement = styled.span`
  font-size: 0.75rem;
  margin: 1.25rem 0rem;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 1rem 1.25rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "100%" })}
`;

const ErrorMsg = styled.div`
  font-size: 1.25rem;
  color: red;
  cursor: pointer;
  margin-top: 1rem;
`;

const Typography = styled.div`
  text-decoration: underline;
  color: black;
  cursor: pointer;
  margin-top: 2rem;
  white-space: initial;
`;

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Please enter a longer username")
    .required("Username is required"),
  firstName: yup
    .string()
    .min(2, "Please enter a longer name")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Please enter a longer surname")
    .required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Required field"),
});

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;
    try {
      const res = await publicRequest.post("/auth/register", data);
      const savedUser = await res.data;
      if (savedUser) {
        setError(null);
        formik.resetForm();
        navigate("/login");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={formik.handleSubmit}>
          <FieldContainer>
            <label htmlFor="username" style={{ color: "teal" }}>
              Username*:
            </label>
            <Input
              id="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              type="text"
            />
            <FieldError>
              {formik.touched.username && formik.errors.username
                ? formik.errors.username
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="firstName" style={{ color: "teal" }}>
              First Name*:
            </label>
            <Input
              id="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              name="firstName"
              type="text"
            />
            <FieldError>
              {formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="lastName" style={{ color: "teal" }}>
              Last Name*:
            </label>
            <Input
              id="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              name="lastName"
              type="text"
            />
            <FieldError>
              {formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="email" style={{ color: "teal" }}>
              Email*:
            </label>
            <Input
              id="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              type="email"
            />
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="password" style={{ color: "teal" }}>
              Password*:
            </label>
            <Input
              id="password"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
            />
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="confirmPassword" style={{ color: "teal" }}>
              Confirm Password*:
            </label>
            <Input
              id="confirmPassword"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              name="confirmPassword"
            />
            <FieldError>
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""}
            </FieldError>
          </FieldContainer>
          <Agreement>
            By creating a new account, I consent to the processing of my
            personal information in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button type="submit">CREATE ACCOUNT</Button>
        </Form>
        <ErrorMsg style={error ? { display: "block" } : { display: "none" }}>
          {error}
        </ErrorMsg>
        <Typography
          onClick={() => {
            formilk.resetForm();
            navigate("/login");
          }}
        >
          Already have an account? Login here.
        </Typography>
      </Wrapper>
    </Container>
  );
};

export default Register;
