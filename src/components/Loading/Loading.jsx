import React, { useState } from "react";
import { MoonLoader } from "react-spinners";
import "./loading.scss";

function Loading() {
  let [color] = useState("#4e55d4");

  return (
    <div className="loading">
      <MoonLoader color={color} size={70} />
    </div>
  );
}

export default Loading;
