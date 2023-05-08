import { mobile } from "../responsive";
import styled from "styled-components";
import Notice from "../Components/Notice";
import Footer from "../Components/Footer";
import Wares from "../Components/Wares";
import NewsSheet from "../Components/NewsSheet";
import NavigationBar from "../Components/NavigationBar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Holder = styled.div``;

const Title = styled.h1`
  margin-top: 21px;
`;

const RefineHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Refine = styled.div`
  margin: 21px;
  margin-right: 21px;
  ${mobile({
    width: "0px 18px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const RefineText = styled.span`
  font-size: 21px;
  font-weight: 600;
  margin-right: 21px;
  ${mobile({
    marginRight: "0px",
  })}
`;

const Select = styled.select`
  padding: 6px;
  margin-right: 21px;
  ${mobile({
    margin: "9px 0px",
  })}
`;

const Option = styled.option``;
const WaresListPage = () => {
  const location = useLocation();
  const gr = location.pathname.split("/")[2];
  const [classifies, setClassifies] = useState({});
  const [arrange, setArrange] = useState("newest");

  const handleClassifies = (e) => {
    const value = e.target.value;
    setClassifies({
      ...classifies,
      [e.target.name]: value,
    });
  };

  return (
    <Holder>
      <Notice />
      <NavigationBar />
      <Title>{ gr}</Title>
      <RefineHolder>
        <Refine>
          <RefineText>Product Refinement:</RefineText>
          <Select name="type" onChange={handleClassifies}>
            <Option hidden>type</Option>
            <Option>furniture</Option>
            <Option>houseware</Option>
            <Option>others</Option>
          </Select>
          <Select name="size" onChange={handleClassifies}>
            <Option hidden>size</Option>
            <Option>small</Option>
            <Option>medium</Option>
            <Option>large</Option>
          </Select>
        </Refine>
        <Refine>
          <RefineText>Product Classification:</RefineText>
          <Select onChange={(e) => setArrange(e.target.value)}>
            <Option value={"newest"}>Newest</Option>
            <Option value={"asc"}>High Cost </Option>
            <Option value={"desc"}>Low Cost </Option>
          </Select>
        </Refine>
      </RefineHolder>
      <Wares gr={gr} classifies={classifies} arrange={arrange} />
      <NewsSheet />
      <Footer />
    </Holder>
  );
};

export default WaresListPage;
