import { useEffect, useState } from "react";

// 3 types of useEffect
//useEffect(callback)
// Goọi callback mỗi khi component rerender
// Goọi callback sau khi component duoc render vao DOM
//useEffect(callback, [])
// Chi goi 1 lan sau khi component mounted
//useEffect(callback, [deps])
//callback se goi laji moi khi deps thay doi
//******************* */

//Call luôn được gọi sau khi Component mounted


const Content = () =>{
    const [countDown, setCountDow] = useState(180); 

    useEffect(()=>{
        var a = setInterval(()=>{
            setCountDow(prev => prev - 1);
        },1000)
        return (()=>{
            clearInterval(a);
        })  
    }, [])
    
    return (
        <div key='Content'>
            <h1>{countDown}</h1>
        </div>    
    )
}

export default Content;