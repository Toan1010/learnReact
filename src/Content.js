import { useLayoutEffect, useState } from "react";

//useEffect
//1. Cap nhat lai state
//2. Cap nhat DOM (mounted)
//3. Render lai UI
//4. Goi cleanup neu deps thay doi
//5. Goi useEffect callback

//useLayoutEffect
//1. Cap nhat lai state
//2. Cap nhat DOM (mounted)
//3. Goi cleanup neu deps thay doi (sync)
//4. Goi useLayoutEffect callback (sync)
//5. Reander lai UI

const Content = () =>{
    const [count, setCount] = useState(0);

    useLayoutEffect(() =>{
        if(count > 3){
            setCount(0);
        }
    },[count]);

    const submit = () => {
        setCount(prev => prev+1);
    }

    return (
        <div key='Content'>
            <h1>{count}</h1>
            <button onClick={submit}>Run</button>
        </div>    
    )
}

export default Content;