import logo from "./logo.svg";
import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((results) => {
        console.log("api was called");
        setData(results[0].name);
      });
  }, [count]);
  
    // const listOfUsers = data.map(list => {
    //   <ul key={list.id}>
    //     <li>{list.name}</li>
    //     <p>{list.company}</p>
    //     <h2>{list.address}</h2>
    //   </ul>
    // })

  return (
    <div className="App">
      <h1 className="title">HELLO useEffect-Hook</h1>
      <section>
        {data}
      </section>
      <section>
        {count}
        <button onClick={()=> setCount(count+1)}>click</button>
      </section>
    </div>
  );
}

export default App;
