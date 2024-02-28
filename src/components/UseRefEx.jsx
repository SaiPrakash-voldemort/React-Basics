import React, { useRef } from "react";

const UseRefEx = () => {
  const data = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data.current.focus);
  };
  return (
    <div>
      <input type="text" ref={data}></input>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default UseRefEx;
