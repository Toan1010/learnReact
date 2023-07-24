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

const tabs = ['posts', 'photos', 'albums'];

const Content = () =>{
    const [type, setType] = useState('albums');
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/'+type)
            .then(res=>res.json())
            .then(data => {
                // console.log(type);
                setData(data)
            })
        console.log(type);
    },[type])

    return (
        <div key='Content'>
            {tabs.map(tab => 
                (<button 
                key={tab} 
                style={type === tab ? {color:'red', background:'#333'}:{}}
                onClick={()=>setType(tab)}
                >
                    {tab}
                </button>)
            )} 
            <h1>List</h1>
            {
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            }

        </div>    
    )
}

export default Content;