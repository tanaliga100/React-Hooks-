import logo from "./logo.svg";
import { useReducer, useRef, useState } from "react";
import "./App.css";

function App() {
  const initialState = {
    counter: 0,
    showText: false,
  };

  const functionReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1, showText: state.showText };
        break;
      case "toggle":
        return { counter: state.counter, showText: !state.showText };
      default:
        return state;
        break;
    }
  };

  const [state, dispatch] = useReducer(functionReducer, initialState);

  return (
    <div className="App">
      <h1 className="title">HELLO useReducer-Hook</h1>
      <section>
        <h1>{state.counter}</h1>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
            dispatch({ type: "toggle" });
          }}
        >
          Click
        </button>
      </section>
      <section>{state.showText && <p>This is a text</p>}</section>
    </div>
  );
}

export default App;
