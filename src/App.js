import {React, useState} from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButtton from './components/UI/Button/MyButtton';
import MyInput from './components/UI/Input/MyInput';
import './styles/App.css';



const App = () => { 

  const [posts, setPost] = useState( [
    {id:1, title:'JavaScript', postText:'язык программирования.'},
    {id:2, title:'React', postText:'библиотека JS для создания пользовательских интерфейсов.'},
    {id:3, title:'React Native', postText:'фреймворк для разработки нативный мобильных и настольных приложений.'}
  ]);

  return (
    <div className="App">
      <form>
        <MyInput placeholder='пост'/>
        <MyInput placeholder='заголовок'/>
        <MyButtton disabled>gen</MyButtton>
      </form>
      <PostList posts={posts} title='список постов а'/>
    </div>
  );
}




export default App;
