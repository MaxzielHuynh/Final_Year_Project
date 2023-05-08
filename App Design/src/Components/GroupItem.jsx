import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Holder = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const In4 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: 570;
  background-color: white;
`;
const GroupItem = ({ item }) => {
  return (
    <Holder>
      <Link to={`/wares/${item.gr}`}>
        <Img src={item.img} />
        <In4>
          <Title>{item.title}</Title>
          <Button>Buy Now</Button>
        </In4>
      </Link>
    </Holder>
  );
};

export default GroupItem;
