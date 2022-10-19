import {React, useState, useRef} from 'react';
import './styles/App.css';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';



const App = () => { 

  const [posts, setPosts] = useState([
    {id:'1', title:'Python', body:'Decription'},
    {id:'2', title:'JavaScript', body:'Decription'},
    {id:'3', title:'React', body:'Decription'},
    {id:'4', title:'Vue', body:'Decription'}

  ])
  const [post, setPost] = useState( {title:'', body:''})

  const addNewPost = (e) => {
    // отключение перезагрузки при нажатии на кнопку
    e.preventDefault()
    // Добавление в массив с постами
    setPosts([...posts, {...post, id: Date.now()}])
    // Очистка инпутов
    setPost({title:'', body:''})
  }

  return (
    <div className="App">
      <form>
        {/* Управляемые компонент(useState) */}
        <Input
          value={post.title}
          type='text'
          placeholder='Название' 
          onChange={e => setPost({...post, title: e.target.value})}
          />
        <Input
          value={post.body}
          type='text' 
          placeholder='Описание'
          onChange={e => setPost({...post, body: e.target.value})}
          />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} title='Список постов'/>
    </div>
  );

}




export default App;
