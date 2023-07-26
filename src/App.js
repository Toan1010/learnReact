import Content from "./Content";
import { useState, useCallback } from "react";

//useCallback được dùng để tạo ra hàm dùng cho các Component con giúp cho các Component con nếu 
//ko có sự thay đổi về CẤU TRÚC thì sẽ ko cần re render

function App() {
  const [show, setShow] = useState(false);
  const [count, setCount]= useState(1);
  const [count2, setCount2]= useState(1);
  
  const handleStart = () =>{
    setCount(prev => prev+1)
  }

  const handleStart2 = useCallback(()=>{
    setCount2(prev => prev+1)
  },[])

  return (
    <div className="App" style={{padding:50,}}>
      <button onClick={()=>setShow(!show)}>Toggle Content</button>
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <button 
      onClick={handleStart}>
        click to increase
      </button>
      {show && <Content 
        handle={handleStart2}
      />}
    </div>
  );
}

export default App;
