import logo from "./logo.svg";
import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import "./App.css";

function App() {
  useLayoutEffect(() => {
    console.log('layout');
  })
  useEffect(()=> {
    console.log('effect');
  })
  
  return (
    <div className="App">
      <h1 className="title">HELLO useLayOutEffect-Hook</h1>
      <section>
      </section>
      <section>
      </section>
    </div>
  );
}

export default App;
