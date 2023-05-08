import styled from "styled-components";
import { mobile } from "../responsive";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search, ShoppingCartRounded } from "@material-ui/icons";

// Container = Holder
const Holder = styled.div`
  height: 63px;
  ${mobile({ height: "60px" })}
  }
`;

// Wrapper = Cover
const Cover = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "12px 3px" })}
`;

const Centre = styled.div`
  flex: 1;
  color: black;
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-transform: uppercase;
`;

const Right = styled.div`
  flex: 1;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;
//menuitem = menu objectF
const MenuObject = styled.div`
  color: black;
  cursor: pointer;
  font-size: 15px;
  margin-left: 27px;
  ${mobile({ fontSize: "12px", marginLeft: "6px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

//language = Dialect
const Dialect = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

//SearchHolder = SearchContainer
const SearchHolder = styled.div`
  padding: 5px;
  display: flex;
  margin-left: 25px;
  align-items: center;
  border: 0.5px solid lightgray;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "60px" })}
`;

//logo = trademark
const Trademark = styled.h1`
  cursor: pointer;
  font-weight: bold;
  ${mobile({ fontSize: "21px" })}
`;

function NavigationBar() {

  const quantum = useSelector((state) => state.bag.quantum);

  return (
    <Holder>
      <Cover>
        <Left>
          <Dialect>EN</Dialect>
          <SearchHolder>
            <Input placeholder="Look Up" />
            <Search style={{ color: "	slategray", fontSize: 15 }} />
          </SearchHolder>
        </Left>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Centre>
            <Trademark>Maxziel</Trademark>
          </Centre>
        </Link>
        <Right>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <MenuObject>Register</MenuObject>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuObject>Sign in</MenuObject>
          </Link>
          <Link to="/bag" style={{ textDecoration: "none" }}>
            <MenuObject>
              <Badge color="secondary" badgeContent={quantum}>
                <ShoppingCartRounded />
              </Badge>
            </MenuObject>
          </Link>
        </Right>
      </Cover>
    </Holder>
  );
}

export default NavigationBar;
