import { useState } from 'react';
import './App.css';
import Button from './components/button/button'
import Counter from './components/counter/counter';

function App() {
  let [counter, setCounter] = useState(0);
  const incrementCounter = ()=> {
    console.log("increment");
    setCounter( prev => prev +1);
  }
  const decrementCounter = ()=> {
    console.log("decrement");
    return counter >0 ? setCounter(counter -= 1) : 0;
  }

  return (
    <div className="App">
      <Button text="increment" functionName={incrementCounter}></Button>
      <Counter text={counter}></Counter>
      <Button text="decrement" functionName={decrementCounter}></Button>
    </div>
  );
}

export default App;
