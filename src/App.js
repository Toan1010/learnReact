import { useReducer } from "react";

//useState
//1. init State = 0
//2. Actions : up(state+1) down(state-1)

//useReducer
//1. init state = 0
//2. Actions : up(state+1) down(state-1)
//3. Reducer 
//4. Dispatch

let initialState = 0;

const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const TO_RESTART_ACTION = 'restart';

const reducer = (init, action) => {
  switch(action){
    case UP_ACTION:
      return init+1;
    case DOWN_ACTION:
      return init-1;
    case TO_RESTART_ACTION:
      return 0;
    default:
      throw new Error('Invalid action: ');
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  

  return (
    <div className="App" style={{padding:50,}}>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(UP_ACTION)}>up</button>
      <button onClick={()=>dispatch(TO_RESTART_ACTION)}>restart</button>
      <button onClick={()=>dispatch(DOWN_ACTION)}>down</button>
    </div>
  );
}

export default App;
