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
    const [toTop, setToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/'+type)
            .then(res=>res.json())
            .then(data => {
                // console.log(type);
                setData(data)
            })
    },[type])

    useEffect(() =>{
        const handlerScroll= () =>{
            setToTop(window.scrollY >= 200);
        }
        
        const handlerSize= () =>{
            setWidth(window.innerWidth)
        }


        window.addEventListener('resize', handlerSize);
        window.addEventListener('scroll',  handlerScroll);

        //Cleanup function : la ham se goi khi doi tuong duoc goi bi unmounted.
        //No se loai bo het cac ham ko dung toi de bo nho ko bi ro ri

        return()=>{
            window.removeEventListener('scroll', handlerScroll)
            window.removeEventListener('resize', handlerSize)
        }

    },[]);

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
            
            <h1>Present size: {width}</h1>
            <h1>List title</h1>
            {
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            }
            {
                toTop && (
                    <button
                        style={{
                            position: 'fixed',
                            bottom: 20,
                            right: 20
                        }}
                        onClick={()=>{window.scrollTo(0,0)}}
                    > to Top </button>
                )
            }
        </div>    
    )
}

export default Content;