import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import './styles/App.css';


const App = () => { 
  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <PostItem id='1' postHeader='JavaScript' postText='язык программирования.'/>
      <PostItem id='2' postHeader='React' postText='библиотека JS для создания пользовательских интерфейсов.'/>
      <PostItem id='3' postHeader='React Native' postText='фреймворк для разработки нативный мобильных и настольных приложений.'/>
    </div>
  );
}




export default App;
