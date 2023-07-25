import { useRef, useEffect, useState } from "react";

const Content = () =>{
    const [count, setCount] = useState(60); 
    const [disable, setDisable] = useState(false);
    let timer = useRef({name: "timer",describe: count});
    let prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
       } 
    ,[count]);

    const handleStart = () => {
        timer.describe = setInterval(()=>{
            setCount(prev => prev-1)
        },1000)
        setDisable(true);
    }
    const handleStop = () => {
        clearInterval(timer.describe);
        setDisable(false);
    }

    console.log(`prevCount:${prevCount.current} \ncount: ${count}`);

    return (
        <div key='Content'>
            <h1>{count}</h1>
            <button onClick={handleStart} disabled={disable}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>    
    )
}

export default Content;