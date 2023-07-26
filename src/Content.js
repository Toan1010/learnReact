import { memo } from "react";

// memo  là một higher order component. Nó tương tự như React.PureComponent 
// nhưng dành cho function components thay vì là class.

//memo được dùng để ngăn chặn render lại nếu như các thành phần trong Component ko có gì cần thay đổi
//Ví dụ : khi ta dùng Content ở trong App khi App có thành phần thay đổi
//Nếu như các thành phần trong Content ko thay đổi thì ta ko cần phải chạy lại Content 


const Content = ({handle}) =>{
    console.log('render Content');
    return (
        <div key='Content'>
            <h1>This is Content</h1>
            <button onClick={handle}>Start</button>
        </div>    
    )
}

export default memo(Content);