
import React ,{useState} from "react";
import './../styles/App.css';


const App = () => {
const [name,setname]=useState("");
function handleOnchange(event){
setname(event.target.value);
}
  return (
    <div>
        {/* Do not remove the main div */}
      <h1>Enter Your Name:</h1>

      <input type="text" value={name} onChange={handleOnchange}/>
      <p>{name && `Hello ${name}!`}</p>
    </div>
  )
}

export default App
