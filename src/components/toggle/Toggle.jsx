import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(true);
  const HandleToggle = () => {
    setToggle((prev) => !prev);
  };
  return <div>Toggle</div>;
}

export default Toggle;
