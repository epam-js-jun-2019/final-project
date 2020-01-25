import React from "react";
import { useSelector } from "react-redux";
import Pokemon from "../pokemon";
import CatchedView from "./catchedView";

const Catched = () => {
  const catched = useSelector(state => state.catched);
  const data = useSelector(state => state.data);
  
  const result = [];
  catched.forEach(catchedEl => {
    const pokemon = data.filter(dataEl => dataEl.id === catchedEl);
    const { id, name, image, catched } = pokemon[0];
    result.push(<Pokemon key={id} src={image} {...{ id, name, catched }} />);
  });
  return <CatchedView data={result} />;
};

export default Catched;
