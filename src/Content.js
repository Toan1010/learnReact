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

const Content = () =>{
    const [avatar, setAvatar] = useState();
    
    useEffect(() =>{
        return(()=>{
            avatar && URL.revokeObjectURL(avatar.preview)
            }
        );
    },[avatar]);


    
    const handlePreview = (e) =>{
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        console.log(file.preview);
        setAvatar(file);
    };

    return (
        <div key='Content'>
            <input
                type="file"
                onChange={handlePreview}
            />
            {
                avatar && 
                (<img src={avatar.preview} alt="none" width='80%' />)
            }
        </div>    
    )
}

export default Content;