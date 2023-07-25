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
//Cleanup luon duoc goi truoc khi component unmounted
//Cleanup luon duoc goi truoc khi callback duoc goi (tru lan mounted dau tien)

const lessons =['What is ReactJS ?', 'SPA/MPA', 'Arrow function']

const Content = () =>{
    const [chon, setChon] = useState(0)

    useEffect(() =>{
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener('lesson '+lessons[chon], handleComment)
        
        return () => {
            window.removeEventListener('lesson '+lessons[chon], handleComment)
        }
    },[chon])

    return (
        <div key='Content'>
            <ul>
            {
                lessons.map((lesson, index) =>{
                    return (
                        <li 
                        key={index}
                        style={{
                            color: index === chon ? 'red' : '#333'
                        }}
                        onClick={()=>setChon(index)}
                        >
                            {lesson}
                        </li>
                    )
                })
            }
            </ul>
            
        </div>    
    )
}

export default Content;