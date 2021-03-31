import React from "react";
import { ReactComponent as Remove } from "../assets/images/icon-remove.svg";

const Tablet = () => {
  return (
    <span className="tablet">
      <p className="tablet__name">Frontend</p>
      <button className="tablet__delete">
        <Remove />
      </button>
    </span>
  );
};

export default Tablet;
