import React, { Component } from 'react';
import logo from './character.png';
import './App.css';

// 클래스형태로 만들어진 컴포넌트에는 꼭, render 함수가 있어야 한다.
// 그리고 그 내부에서는 JSX 를 return 해주어야 합니다. 
// 아래 보이는 HTML 같은 코드가 바로, JSX이다.
class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to My First React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
  }
  
  //작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해준다.
  export default App;