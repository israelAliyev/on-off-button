import './style.css';
import {useState} from "react";

function App() {

    const[active , setActive] = useState(false);

  return (
    <div className="App">

      <div className="container">

        <p>{active ? "Motor Active" : "Motor Disabled"}</p>

        <input onClick={() => {setActive(!active)}} type="checkbox"/>
      </div>

    </div>
  );
}

export default App;
