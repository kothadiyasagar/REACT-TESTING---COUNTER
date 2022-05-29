import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Button,ButtonRedus } from './componet/Button';
function App() {
  const [counter, setcounter]= useState(0)
  return (
    <div className="App">
     <h1>{counter}</h1>

     <Button onClick={()=>{setcounter(counter+5)}}>ADD+5</Button>
     <ButtonRedus onClick={()=>{setcounter(counter-5)}}>REDUCE-5</ButtonRedus>
    </div>
  );
}

export default App;
