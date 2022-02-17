import logo from "./logo.svg";
import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";


  const initialState = {
    name: null,
    age: 0,
  }

function App() {
  const [data, setData] = useState(initialState)
  const inputRef = useRef(null)
  
  const clickHandler = (e) => {
    e.preventDefault()
    setData({
      name: inputRef.current.value,
    })
    inputRef.current.value = ""
    inputRef.current.focus()
  }

  return (
    <div className="App">
      <h1 className="title">HELLO useRef-Hook</h1>
      <section>
      <form action=""  onSubmit={clickHandler}>
      <input ref={inputRef} type="text" placeholder="Ex..." />
      </form>
      </section>
      <h1>{data.name}</h1>
      <section>
      <button onClick={clickHandler}>Clear</button>
      </section>
    </div>
  );
}

export default App;
