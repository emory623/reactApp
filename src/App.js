import {React, useState} from 'react';
import PostForm from './components/PostForm';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';

import './styles/App.css';



const App = () => { 

  const [posts, setPosts] = useState( [
    {id:1, title:'JavaScript', postText:'язык программирования.'},
    {id:2, title:'React', postText:'библиотека JS для создания пользовательских интерфейсов.'},
    {id:3, title:'React Native', postText:'фреймворк для разработки нативный мобильных и настольных приложений.'}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts
        ? <PostList remove={removePost} posts={posts} title='список постов а'/>
        : <h1 style={{textAlign:'center'}}>здесь пока пусто :(</h1>
      }
    </div>
  );
}




export default App;
