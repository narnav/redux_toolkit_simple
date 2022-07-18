import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment, selectCount } from "./counterSlice";
import {  selectLog } from "./loggedSlice";
const DisplayUpd = () => {
  const count = useSelector(selectCount);
//   get data from loggedSlice
  const logStatus = useSelector(selectLog);
  return <div>DisplayUpd {count}
  <hr></hr>
  {/* display data from slicer */}
  Logged: {logStatus ? "logged":"not logged"}
  </div>;
};

export default DisplayUpd;
