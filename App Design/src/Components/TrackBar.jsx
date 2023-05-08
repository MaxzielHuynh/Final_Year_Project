//trackbar=slider
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@material-ui/icons";
import { useState } from "react";
import { slipItems } from "../data";
import { mobile } from "../responsive";
import styled from "styled-components";

const Holder = styled.div`
  wight: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  wight: 50px;
  height: 50px;
  display: flex;
  background-color: Orange;
  justify-content: center;
  align-items: center;
  border-radius: 40%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => props.direction === "right" && "10px"};
  left: ${(props) => props.direction === "left" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.55;
  z-index: 2;
`;

//cover = wrapper
const Cover = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slipIndex * -100}vw);
  transition: all 1s ease-in-out;
`;

//Slide=slip
const Slip = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

//ImageHolder=imagecontainer
const ImageHolder = styled.div`
  height: 100%;
  flex: 1;
`;

const Img = styled.img`
  height: 81%;
`;

//In4Holder= infocontainer
const In4Holder = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

//trackbar=slider
const TrackBar = () => {
  const [slipIndex, setSlipIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlipIndex(slipIndex > 0 ? slipIndex - 1 : 2);
    } else {
      setSlipIndex(slipIndex < 2 ? slipIndex + 1 : 0);
    }
  };
  return (
    <Holder>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftRounded />
      </Arrow>
      <Cover slipIndex={slipIndex}>
        {slipItems.map((item) => (
          <Slip bg={item.bg} key={item.id}>
            <ImageHolder>
              <Img src={item.img} />
            </ImageHolder>
            <In4Holder>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>Get Now</Button>
            </In4Holder>
          </Slip>
        ))}
      </Cover>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightRounded />
      </Arrow>
    </Holder>
  );
};

export default TrackBar;
