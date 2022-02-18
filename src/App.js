import logo from "./logo.svg";
import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  
  const buttonRef = useRef(null)
  
  const clickHandler = () => {
    buttonRef.current.alterToggle()
  }

  return (
    <div className="App">
      <h1 className="title">HELLO useImperativeHandle-Hook</h1>
      <section>
      <button onClick={clickHandler}>Button From Parent</button>
      <Button ref={buttonRef}/>
      </section>
      <section>
      </section>
    </div>
  );
}

export default App;
