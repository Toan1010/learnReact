import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Tao fake chat
function emitComment(comment) {
  setInterval(()=>{
    window.dispatchEvent(
      new CustomEvent(`lesson ${comment}`,{
        detail: `Noi dung cua bai hoc ${comment}`
      }))
  },1000)
}
const lessons =['What is ReactJS ?', 'SPA/MPA', 'Arrow function']

// lessons.forEach(function(lesson) {
//   emitComment(lesson)
// })

lessons.map(lesson => { emitComment(lesson) })

console.log('Hello world');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
