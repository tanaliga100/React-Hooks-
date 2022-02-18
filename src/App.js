import logo from "./logo.svg";
import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import "./App.css";

function App() {
  
  const inputRef = useRef(null)

  useLayoutEffect(() => {
    console.log('layout', inputRef.current.value);
  },[])

  useEffect(()=> {
    console.log('effect', inputRef.current.value = "Hello");
  },[])

  
  return (
    <div className="App">
      <h1 className="title">HELLO useLayOutEffect-Hook</h1>
      <section>
        <input ref={inputRef} value="Jords" type="text" readOnly />
      </section>
      <section>
      </section>
    </div>
  );
}

export default App;
