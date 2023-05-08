//category=group
import { groups } from "../data";
import GroupItem from "./GroupItem";
import styled from "styled-components";
import { mobile } from "../responsive";

const Holder = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: "60px" })}
`;

const Groups = () => {
  return (
    <Holder>
      {groups.map((item) => (
        <GroupItem item={item} key={item.id} />
      ))}
    </Holder>
  );
};
export default Groups;
