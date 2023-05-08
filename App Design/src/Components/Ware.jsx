import {
  FavoriteSharp,
  SearchTwoTone,
  ShoppingCartSharp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const In4 = styled.div`
  opacity: 0;
  top: 0;
  left: 10;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  position: absolute;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease-in-out;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Holder = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  display: inline-flex;
  min-width: 300px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #d7d2cc;
  &:hover ${In4} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  border-radius: 50%;
  background-color: white;
`;

const Img = styled.img`
  z-index: 3;
  width: 50%;
  height: 50%;
  object-fit: cover
  border-radius: 50%;
`;

const Icon = styled.div`
  margin: 9px;
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  background-color: white;
  justify-content: center;
  transition: all 1.5s ease;
  text-decoration: none;
  color: black;

  &:hover {
    transform: scale(1.2);
    background-color: #e9e5df;
  }
`;

const Ware = ({ item }) => {
  return (
    <Holder>
      <Img src={item.img} />
      <Circle />
      <In4>
        <Icon>
          <ShoppingCartSharp />
        </Icon>
        <Icon>
          <Link
            to={`/ware/${item._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <SearchTwoTone />
          </Link>
        </Icon>
        <Icon>
          <FavoriteSharp />
        </Icon>
      </In4>
    </Holder>
  );
};

export default Ware;
