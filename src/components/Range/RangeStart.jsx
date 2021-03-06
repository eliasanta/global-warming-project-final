import React from "react";
import "./range.scss";

function RangeStart({ onChange, dataLength, rangeMin }) {
  return (
    <div>
      <div className="mt-4">Set start</div>
      <input
        className="input--style "
        onChange={onChange}
        type="range"
        min={dataLength - dataLength}
        max={dataLength}
        value={rangeMin}
      />
    </div>
  );
}

export default RangeStart;
