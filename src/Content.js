import { useEffect,useState } from "react";

// 3 types of useEffect
//useEffect(callback)
// Goọi callback mỗi khi component rerender
// Goọi callback sau khi component duoc render vao DOM
//useEffect(callback, [])
// Chi goi 1 lan sau khi component mounted
//useEffect(callback, [deps])
//******************* */

//Call luôn được gọi sau khi Component mounted

const Content = () =>{
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() =>{
        document.title = title;
    });

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
            console.log(posts)
        });
    }, []);

    return (
        <div key='content'>
            <input 
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
            />
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default Content;