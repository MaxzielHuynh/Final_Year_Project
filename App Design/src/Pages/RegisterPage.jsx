import styled from "styled-components";
import { mobile } from "../responsive";

const Holder = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  backgroundsize: cover;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn.pixabay.com/photo/2015/01/07/16/37/wood-591631_960_720.jpg")
      center;
`;

const Cover = styled.div`
  width: 40%;
  padding: 21px;
  min-width: 300px;
  border-radius: 10px;
  background-color: white;
  ${mobile({ width: "80%" })}
  box-shadow: 0 0 12px rgba(0, 0, 0, 3);
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
  margin: 10px;
  padding: 10px;
  min-width: 50%;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid gray;
  margin: 30px 10px 0px 0px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  cursor: pointer;
  font-size: 15px;
  border-radius: 5px;
  padding: 15px 21px;
  background-color: #fee8b0;
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

const Contract = styled.div`
  padding: 9px;
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
  letter-spacing: 0.3px;
  font-family: sans-serif;
`;

const RegisterPage = () => {
  return (
    <Holder>
      <Cover>
        <Title>Register Form</Title>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Phone" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Contract>
            I accept <b>the Terms and Conditions</b> when I create an account.
          </Contract>
          <Button> Register </Button>
        </Form>
      </Cover>
    </Holder>
  );
};

export default RegisterPage;
