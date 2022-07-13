import React from "react";
import { useState } from "react";

function Search(props) {
  /* const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  }); */
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const startHandler = (e) => {
    setStartDate(e.target.value);
    console.log(startDate);
  };

  const endHandler = (e) => {
    setEndDate(e.target.value);
    console.log(endDate);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({ startDate, endDate });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <input
          type="text"
          value={startDate}
          onChange={startHandler}
          placeholder="insert start point"
        ></input>
        <div>{startDate}</div>
        <input
          type="text"
          value={endDate}
          onChange={endHandler}
          placeholder="insert end point"
        ></input>
        <div>{endDate}</div>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block form--button"
        >
          select date
        </button>
      </div>
    </form>
  );
}

export default Search;
