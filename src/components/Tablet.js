import React from "react";
import { useGlobalContext } from "../context";
import { ReactComponent as Remove } from "../assets/images/icon-remove.svg";

const Tablet = ({ filterName }) => {
  const { removeFilter } = useGlobalContext();
  return (
    <span className="tablet" onClick={() => removeFilter(filterName)}>
      <p className="tablet__name">{filterName}</p>
      <button className="tablet__delete">
        <Remove />
      </button>
    </span>
  );
};

export default Tablet;
