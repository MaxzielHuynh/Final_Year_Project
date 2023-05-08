import { mobile } from "../responsive";
import styled from "styled-components";
import Notice from "../Components/Notice";
import Footer from "../Components/Footer";
import NewsSheet from "../Components/NewsSheet";
import NavigationBar from "../Components/NavigationBar";
import { AddRounded, RemoveRounded } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicReq } from "../ReqMethods";
import { addToBag } from "../Redux/BagRedux";
import { useDispatch } from "react-redux";

const Holder = styled.div``;

const Cover = styled.div`
  padding: 60px;
  display: flex;
  ${mobile({
    padding: "9px",
    flexDirection: "column",
  })}
`;

const ImgHolder = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: fit-content;
  height: fit-content;
  object-fit: ;
  ${mobile({
    height: "30vh",
  })}
`;

const In4Holder = styled.div`
  flex: 1;
  padding: 30px 50px;
  ${mobile({
    padding: "12px",
  })}
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Description = styled.p`
  margin: 30px 0px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`;

const RefineHolder = styled.div`
  width: 60%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const RefineTitle = styled.span`
  font-size: 21px;
  font-weight: 200;
`;

const RefineSizeOption = styled.option``;

const RefineSize = styled.select`
  padding: 3px;
  font-size: 18px;
  font-weight: 500;
  margin: 3px 1px;
  align-items: center;
  justify-content: center;
`;

const RefineType = styled.select`
  padding: 3px;
  font-size: 18px;
  font-weight: 500;
  margin: 3px 1px;
  align-items: center;
  justify-content: center;
`;

const Refine = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const AddFields = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  ${mobile({ width: "99%" })}
  justify-content: space-between;
`;

const Amount = styled.div`
  display: flex;
  font-weight: 600;
  align-items: center;
`;

const Count = styled.span`
  display: flex;
  width: 33px;
  height: 33px;
  margin: 0px 6px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #c8b6a6;
`;

const Button = styled.button`
  padding: 18px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  background-color: White;
  border: 1.5px solid #e3ccae;
  &:hover {
    background-color: #f9f5eb;
  }
`;

const RefineTypeOption = styled.option``;

const Ware = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [ware, setWare] = useState({});
  const [quantum, setQuantum] = useState(1);
  const [kindOf, setKindOf] = useState("");
  const [size, setSize] = useState("");
  const despatched = useDispatch();

  useEffect(() => {
    const getWare = async () => {
      try {
        const res = await publicReq.get("/wares/find/" + id);
        setWare(res.data);
      } catch (err) {}
    };
    getWare();
  }, [id]);

  const handleQuantum = (type) => {
    if (type === "minus") {
      quantum > 1 && setQuantum(quantum - 1);
    } else {
      setQuantum(quantum + 1);
    }
  };

  const handleClick = () => {
    despatched(
      //update bag
      addToBag({ ...ware, quantum, kindOf, size })
    );
  };

  return (
    <Holder>
      <Notice />
      <NavigationBar />
      <Cover>
        <ImgHolder>
          <Img src={ware.img} />
        </ImgHolder>
        <In4Holder>
          <Title>{ware.title}</Title>
          <Description>{ware.depiction}</Description>
          <Price>{ware.cost},000 VND</Price>
          <RefineHolder>
            <Refine>
              <RefineTitle>
                <h4>Type:</h4>
              </RefineTitle>
              <RefineType>
                {ware.kindOf?.map((k) => (
                  <RefineTypeOption key={k} onClick={() => setKindOf(k)}>
                    {k}
                  </RefineTypeOption>
                ))}
              </RefineType>
            </Refine>
            <Refine>
              <RefineTitle>
                <h4>Size:</h4>
              </RefineTitle>
              <RefineSize onChange={(e) => setSize(e.target.value)}>
                {ware.size?.map((s) => (
                  <RefineSizeOption key={s}>{s}</RefineSizeOption>
                ))}
              </RefineSize>
            </Refine>
          </RefineHolder>
          <AddFields>
            <Amount>
              <RemoveRounded onClick={() => handleQuantum("minus")} />
              <Count>{quantum}</Count>
              <AddRounded onClick={() => handleQuantum("plus")} />
            </Amount>
            <Button onClick={handleClick}>Add To Your Bag</Button>
          </AddFields>
        </In4Holder>
      </Cover>
      <NewsSheet />
      <Footer />
    </Holder>
  );
};

export default Ware;
