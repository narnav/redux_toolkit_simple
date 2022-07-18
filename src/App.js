import "./App.css";
import DisplayUpd from "./DisplayUpd";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  selectCount,incrementTwo
} from "./counterSlice";

import {
     login, logout,selectLog

  } from "./loggedSlice";

function App() {
  const count = useSelector(selectCount);
  const log = useSelector(selectLog);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementTwo())}>++</button>
        <button onClick={() => dispatch(login())}>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
        {count}
        <hr></hr>{log ? "log":"not log"}
        <DisplayUpd></DisplayUpd>
      </header>
    </div>
  );
}

export default App;
