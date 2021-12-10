// JSX 사용하려면, React를 import 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



//------------------------------------------------------------------------------------
//컴포넌트를 만드는 방법
//1. 클래스를 통해서 만드는 방법
//2. 함수를 통해서 만드는 방법
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// 1. 함수를 통해 만드는 방법
//------------------------------------------------------------------------------------
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------
// 2. 클래스를 통해 만드는 방법
// 참고 : https://velopert.com/3613 
//------------------------------------------------------------------------------------
//import App from './SecondApp';
//구버전 mport registerServiceWorker from './registerServiceWorker';
//import * as serviceWorker from './registerServiceWorker';

// 브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 ReactDOM.render 함수를 사용
// 첫번째 파라미터는 렌더링 할 결과물이고, 두번째 파라미터는 컴포넌트를 어떤 DOM 에 그릴지 정해준다. 
// id 가 root 인 DOM 을 찾아서 그리도록 설정이 되어있는데, 해당 DOM 은 public/index.html 파일에서 찾아볼수 있다.
//ReactDOM.render(<App />, document.getElementById('root'));

// 서비스워커는 브라우저의 백그라운드에서 실행되는 자바스크립트 워커입니다. 
// PWA는 네이티브 앱처럼 오프라인 상태에서도 사용가능하고, 푸시 알림(Notification) 
// 기능도 사용할 수 있는데요. 이런 기능을 할 수 있도록 도와주는 것이 바로 서비스워커입니다. 
//registerServiceWorker();
//serviceWorker.unregister();
//------------------------------------------------------------------------------------


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
