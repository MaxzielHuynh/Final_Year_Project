import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const PUBLISH_STRIPE_KEY =
  "pk_test_51N3FvTDGDznqLOJC5NQdhMCf5hQJuft8ozr3k2TbUPIjrdVXyF7RcQqG59rdBYKTWgCLWeRRIAPSdja4mdH3DQbU00yRPO6jkh";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 1000000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeReq();
  }, [stripeToken]);

  return (
    <div
      style={{
        margin: "20px",
        height: "100vh",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Maxziel Shop"
        image="https://lh3.googleusercontent.com/pw/AJFCJaWgOgjPDS13Aq6UarLscvuj2NGZYzCvT8-l4irVMr3yvJQ17ixqVEJDGE0deu8xk0mRjGq0UiMLVdrq26lxlfSJPCXezjAjtzdcM-M19vgao1yDEHEhbI-K_B6j1iLJSLK8h_chVuQxKwkINtvjAhxR=w500-h500-s-no?authuser=0"
        billingAddress
        shippingAddress
        shippingOption
        description="Your total payment is 1000000"
        amount={1000000}
        token={(token) => {
          setStripeToken(token);
        }}
        stripeKey={PUBLISH_STRIPE_KEY}
      >
        <button
          style={{
            margin: "20px",
            width: "200px",
            border: "none",
            color: "white",
            outline: "none",
            padding: "20px",
            cursor: "pointer",
            fontWeight: "bold",
            borderRadius: "12px",
            backgroundColor: "black",
          }}
        >
          Buy now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
