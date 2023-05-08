import {
  Facebook,
  Instagram,
  LinkedIn,
  LocalPhone,
  LocationOn,
  MailRounded,
  Pinterest,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Holder = styled.div`
  display: flex;
  padding: 20px;
  border-top: 1px solid #e4dccf;
  background-color: #b7b7b7;
  ${mobile({ flexDirection: "column" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 21px;
  ${mobile({ backgroundColor: "#eee " })}
`;

const Left = styled.div`
  flex: 1;
  padding: 21px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1``;

const Description = styled.p`
  font-size: 17px;
  margin: 20px 0px;
  text-align: justify;
`;

const SocialMedia = styled.div`
  display: flex;
`;

const MediaIcon = styled.div`
  width: 45px;
  height: 45px;
  color: white;
  display: flex;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
`;

const Centre = styled.div`
  flex: 1;
  padding: 21px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 33px;
`;

const List = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  list-style: none;
`;

const ListItem = styled.div`
  width: 50%;
  margin-bottom: 9px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
`;

const Payment = styled.img`
  width: 60%;
`;
const Footer = () => {
  return (
    <Holder>
      <Left>
        <Logo>HCH_FYP</Logo>
        <Description>
          HCH_FYP is a furniture store that offers diverse products for
          households and high-rise buildings. The store caters to all customers
          with options from affordable to luxurious. Despite being newly
          established, HCH_FYP is committed to quality and customer satisfaction
          and is rapidly growing to become one of the leading furniture stores
          in the industry.
        </Description>
        <SocialMedia>
          <MediaIcon color="0008C1">
            <Facebook />
          </MediaIcon>
          <MediaIcon color="FFCEFE">
            <Instagram />
          </MediaIcon>
          <MediaIcon color="00E7FF">
            <Twitter />
          </MediaIcon>
          <MediaIcon color="383E56">
            <LinkedIn />
          </MediaIcon>
          <MediaIcon color="DC3535">
            <YouTube />
          </MediaIcon>
          <MediaIcon color="D61355">
            <Pinterest />
          </MediaIcon>
        </SocialMedia>
      </Left>
      <Centre>
        <Title>CUSTOMER SERVICE</Title>
        <List>
          <ListItem>My Account</ListItem>
          <ListItem>My Cart</ListItem>
          <ListItem>Coupon</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Tracking Orders</ListItem>
          <ListItem>Exchanges & Returns</ListItem>
        </List>
      </Centre>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "15px" }} />
          Studio 32p Yvette Crest, Russellmouth
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "15px" }} />
          1-505-658-6564
        </ContactItem>
        <ContactItem>
          <MailRounded style={{ marginRight: "15px" }} />
          abigail71@thomas.com
        </ContactItem>
        <Payment src="https://th.bing.com/th/id/R.57cadbfe574c1415e628a6f030c2ceaf?rik=Ehz3mZy4B5A9mg&riu=http%3a%2f%2fwww.tailieukientruc.net%2fassets%2ftailieuv3%2fimages%2ffootPayment.png&ehk=ZC03KH%2fds23LxtmNkwIfJ%2fcjCIOkeUHZqoKy6n7dUVw%3d&risl=&pid=ImgRaw&r=0" />
      </Right>
    </Holder>
  );
};

export default Footer;
