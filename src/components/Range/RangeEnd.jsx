import React from "react";
import "./range.scss";

function RangeEnd({ onChange, dataLength, rangeMax }) {
  return (
    <div>
      <div>Set end</div>
      <input
        className="input--style"
        onChange={onChange}
        type="range"
        min={dataLength - dataLength}
        max={dataLength}
        value={rangeMax}
      />
    </div>
  );
}

export default RangeEnd;
