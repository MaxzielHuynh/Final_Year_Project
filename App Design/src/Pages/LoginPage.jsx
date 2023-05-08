import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../Redux/ApiCall";
import { useDispatch, useSelector } from "react-redux";

const Holder = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backgroundsize: cover;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn.pixabay.com/photo/2019/05/24/21/31/pen-4227296_960_720.jpg")
      center;
`;

const Cover = styled.div`
  width: 30%;
  padding: 21px;
  border-radius: 15px;
  background-color: white;
  ${mobile({ width: "80%" })}
  box-shadow: 0 0 12px rgba(0, 0, 0, 3);
`;

const Button = styled.button`
  width: 50%;
  border: none;
  cursor: pointer;
  margin-top: 12px;
  border-radius: 5px;
  padding: 15px 21px;
  margin-bottom: 10px;
  background-color: #fee8b0;
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  height: 30px;
  padding: 12px;
  min-width: 50%;
  font-size: 18px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid gray;
  margin: 30px 10px 0px 0px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-family: sans-serif;
  text-shadow: 0px 0px 1px;
  text-transform: uppercase;
`;

const Link = styled.a`
  display: flex;
  margin: 6px 0;
  color: #181d31;
  cursor: pointer;
  font-size: 10px;
  letter-spacing: 0.3px;
  font-family: sans-serif;
  text-decoration: underline;
`;

const Error = styled.span`
  color: red;
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const despatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.client);
  const handleClick = (e) => {
    e.preventDefault();
    login(despatch, { username, password });
  };

  return (
    <Holder>
      <Cover>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Username and password incorrect</Error>}
          <Link>Forgot your password? Click here</Link>
          <Link>Don't have account? Click here</Link>
        </Form>
      </Cover>
    </Holder>
  );
};

export default LoginPage;
