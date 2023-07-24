import Content from "./Content";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);


  return (
    <div className="App" style={{padding:50,}}>
      <button onClick={()=>setShow(!show)}>Toggle Content</button>
      {show && <Content/>}
    </div>
  );
}

export default App;
