import Ware from "./Ware";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Holder = styled.div`
  z-index: 1;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffeeb3;
  justify-content: center;
  align-items: center;
`;

const Wares = ({ gr, classifies, arrange }) => {
  const [wares, setWares] = useState([]);
  const [filteredWares, setfilteredWares] = useState([]);

  useEffect(() => {
    const getWares = async () => {
      try {
        const res = await axios.get(
          gr
            ? `http://localhost:5000/api/wares?group=${gr}`
            : "http://localhost:5000/api/wares"
        );

        setWares(res.data);
      } catch (err) {}
    };
    getWares();
  }, [gr]);
  useEffect(() => {
    gr &&
      setfilteredWares(
        wares.filter((item) =>
          Object.entries(classifies).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [wares, gr, classifies]);

  useEffect(() => {
    if (arrange === "newest") {
      setfilteredWares((prev) =>
        [...prev].sort((a, b) => a.createAt - b.createAt)
      );
    } else if (arrange === "asc") {
      setfilteredWares((prev) => [...prev].sort((a, b) => b.cost - a.cost));
    } else {
      setfilteredWares((prev) => [...prev].sort((a, b) => a.cost - b.cost));
    }
  }, [arrange]);

  return (
    <Holder>
      {gr
        ? filteredWares.map((item) => <Ware item={item} key={item.id} />)
        : wares.slice(0, 6).map((item) => <Ware item={item} key={item.id} />)}
    </Holder>
  );
};

export default Wares;
