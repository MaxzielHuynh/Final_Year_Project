import styled from "styled-components";import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Holder = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #d4fafc;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 21px;
  text-align: center;
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 21px;
  ${mobile({ textAlign: "center" })}

`;

const InputHolder = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  background-color: white;
  border: 1px solid #9ba4b5;
  justify-content: space-between;
  ${mobile({ width: "70%" })}
`;

const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 24px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  height: 30px;
  color: F1F6F9;
  background-color: #9ba4b5;
`;
const NewsSheet = () => {
  return (
    <Holder>
      <Title>News Sheet</Title>
      <Description>
        Keep abreast of the latest developments in the products you prefer and
        join our community of like-minded individuals.
      </Description>
      <InputHolder>
        <Input placeholder="Enter your email" />
        <Button>
          <Send />
        </Button>
      </InputHolder>
    </Holder>
  );
};

export default NewsSheet;
