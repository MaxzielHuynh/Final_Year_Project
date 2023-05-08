import { mobile } from "../responsive";
import styled from "styled-components";
import Notice from "../Components/Notice";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { clientReq } from "../ReqMethods";
import { useNavigate } from "react-router-dom";

const PUBLISH_STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;

const Holder = styled.div``;

const Heading = styled.h1`
  font-weight: 600;
  text-align: center;
  ${mobile({ padding: "9px" })}
`;

const Upper = styled.div`
  display: flex;
  padding: 21px;
  align-items: center;
  justify-content: space-between;
`;

const UpperBtt = styled.button`
  padding: 9px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px;
  color: ${(props) => props.type === "filled" && "White"};
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
`;

const Downward = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Cover = styled.div`
  padding: 21px;
`;

const UTextField = styled.div`
  padding: 21px;
  ${mobile({ display: "none" })}
`;

const UpperText = styled.span`
  padding: 21px;
  margin: 0px 9px;
  cursor: pointer;
  text-decoration: underline;
`;

const Ware = styled.div`
  display: flex;
  padding: 21px;
  justify-content: space-between;
  ${mobile({ fontSize: "15px", padding: "9px" })}
`;

const PImg = styled.img`
  width: 40vh;
  height: 40vh;
  ${mobile({ width: "20vh", height: "20vh" })}
`;
//PDetails=details
const PDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PId = styled.span``;

const PName = styled.span``;

const PIn4 = styled.div`
  flex: 3;
`;

const PPriceField = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

//PSpecific = product detail
const PSpecific = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
    flexDirection: "column",
    juctifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  })}
`;

const PAmount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
`;

const PSize = styled.div``;

const PCount = styled.div`
  font-size: 18px;
  margin: 5px;
  ${mobile({ margin: "6px 15px" })}
`;

const PPrice = styled.div`
  font-size: 21px;
  font-weight: 500;
  ${mobile({ fontSize: "18px", marginBottom: "18px" })}
`;

const Hr = styled.hr`
  background-color: #e1d7c6;
  border: none;
  height: 1.5px;
`;

const Summary = styled.div`
  flex: 1;
  height: 60vh;
  padding: 21px;
  border-radius: 12px;
  border: 0.6px solid #ede4e0;
`;

const STitle = styled.h1`
  font-weight: 300;
`;

const SItems = styled.div`
  display: flex;
  font-size: 18px;
  margin: 33px 0px;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "overall" && "900"};
  font-size: ${(props) => props.type === "overall" && "21px"};
`;

const SItemsText = styled.span``;

const SItemsPrice = styled.span``;

const SButton = styled.button`
  width: 99.99%;
  color: white;
  padding: 9px;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  background-color: black;
`;

const YourBagPage = () => {
  const bag = useSelector((state) => state.bag);
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await clientReq.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: bag.total * 1000,
        });
        navigate("http://localhost:3000/success", {
          stripeData: res.data,
          wares: bag,
        });
      } catch {}
    };
    stripeToken && makeReq();
  }, [stripeToken, bag.total, navigate, bag]);
  return (
    <Holder>
      <Notice />
      <NavigationBar />
      <Cover>
        <Heading>Your Baggage</Heading>
        <Upper>
          <UpperBtt>Back To Shopping</UpperBtt>
          <UTextField>
            <UpperText>Shopping Bag (0)</UpperText>
            <UpperText>Wishist (1)</UpperText>
          </UTextField>
          <UpperBtt type="filled">Proceed To Payment</UpperBtt>
        </Upper>
        <Downward>
          <PIn4>
            {bag.wares.map((ware) => (
              <Ware>
                <PSpecific>
                  <PImg src={ware.img} />
                  <PDetails>
                    <PName>
                      <b>Name: </b> {ware.title}
                    </PName>
                    <PId>
                      <b>ID: </b> {ware._id}
                    </PId>
                    <PSize>
                      <b>Size: </b> {ware.size}
                    </PSize>
                  </PDetails>
                  <PPriceField>
                    <PAmount>
                      <Remove />
                      <PCount>{ware.quantum}</PCount>
                      <Add />
                    </PAmount>
                    <PPrice>{ware.cost * ware.quantum},000 VND</PPrice>
                  </PPriceField>
                </PSpecific>
              </Ware>
            ))}
            <Hr />
          </PIn4>
          <Summary>
            <STitle>Summary</STitle>
            <SItems>
              <SItemsText>Subtotal: </SItemsText>
              <SItemsPrice>{bag.total},000 VND</SItemsPrice>
            </SItems>
            <SItems>
              <SItemsText>Shipping Estimate: </SItemsText>
              <SItemsPrice>300.000 VND</SItemsPrice>
            </SItems>
            <SItems>
              <SItemsText>Discount: </SItemsText>
              <SItemsPrice>- 300.000 VND</SItemsPrice>
            </SItems>
            <SItems>
              <SItemsText>Free ship: </SItemsText>
              <SItemsPrice>- 500.000 VND</SItemsPrice>
            </SItems>
            <SItems type="overall">
              <SItemsText>Overall </SItemsText>
              <SItemsPrice> {bag.total},000 VND</SItemsPrice>
            </SItems>
            <StripeCheckout
              name="Maxziel Shop"
              image="https://lh3.googleusercontent.com/pw/AJFCJaWgOgjPDS13Aq6UarLscvuj2NGZYzCvT8-l4irVMr3yvJQ17ixqVEJDGE0deu8xk0mRjGq0UiMLVdrq26lxlfSJPCXezjAjtzdcM-M19vgao1yDEHEhbI-K_B6j1iLJSLK8h_chVuQxKwkINtvjAhxR=w500-h500-s-no?authuser=0"
              billingAddress
              shippingAddress
              description={`Your total payment is ${bag.total},000 VND`}
              amount={bag.total * 1000}
              token={onToken}
              stripeKey={PUBLISH_STRIPE_KEY}
            >
              <SButton>Purchase</SButton>
            </StripeCheckout>
          </Summary>
        </Downward>
      </Cover>
      <Footer />
    </Holder>
  );
};

export default YourBagPage;
