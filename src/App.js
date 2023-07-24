import { useState } from "react";

const gifts = ['kr','sentai','animu','lol']


function App() {
  const [chon, setChon] = useState([]);

  const handlerCheck = (id) => {
    setChon(prev=>{
      const isCheck = chon.includes(id)
      if(isCheck) { 
        return chon.filter(item => item !== id)
      }else{
        return [...prev, id]
      }
    });
  };

  return (
    <div className="App" style={{padding:50,}}>
      {gifts.map((gift,index)=>{
        return(
          <div key={index}>
           <input 
            type="checkbox" 
            checked={chon.includes(index)}
            onChange={()=>handlerCheck(index)}
           />
           <label>{gift}</label>
          </div>)
      })}
    </div>
  );
}

export default App;
