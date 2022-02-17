import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';

function App() {
const [counter, setCounter]  = useState(0)
const  [inputValue, setInputValue] =useState('')

const increment = () => {
  setCounter(counter + 10)
}

const inputHandler = (e) => {
  const newvalue = e.target.value;
  setInputValue(newvalue)
  console.log(inputValue);
}

  return (
    <div className="App">
      <h1 className="title">HELLO useState-Hook</h1>
      <section>
        <span>{counter}</span>
        <button onClick={increment}>Increment</button>
      </section>

      <section>
        <input  type="text" placeholder='type something' value={inputValue} onChange={inputHandler} />
        {inputValue}
      </section>
    </div>
  );
}

export default App;
