// 1. 모듈 가져오기
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// from 상대경로(내가만든 모듈) or 모듈명(yarn install에서 설치된, 순수 node 모듈)
import App1 from './App';
import MyInput2 from './MyInput2';
import MyInput from './MyInput';
import MySelect2, { MySelect } from './MySelect';
import MyHooksTest from './MyHooksTest';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App1 /> */}
    {/* <MyInput />
    <MyInput2 />
    <MySelect citys={['서울', '부산', '제주', '대전']} />
    <MySelect2 citys={['서울', '부산', '제주', '대전']} /> */}
    <MyHooksTest num="1" name="ko" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
