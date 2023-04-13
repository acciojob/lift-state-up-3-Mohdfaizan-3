import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [SelectedOption, SetSelectedOption] = useState("");
  const handleClick = (event) => {
    SetSelectedOption(`Option ${event.target.id}`)
  };
  return (
    <div className="parent">
      <Child id={1} handleClick={handleClick} />
      <Child id={2} handleClick={handleClick} />
      <p>Selected Option:{SelectedOption}</p>
    </div>
  );
};

export default Parent;
