import {React, useState, useRef} from 'react';
import './styles/App.css';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import PostForm from './components/PostForm/PostForm';



const App = () => { 

  const [posts, setPosts] = useState([
    {id:'1', title:'Python', body:'Decription'},
    {id:'2', title:'JavaScript', body:'Decription'},
    {id:'3', title:'React', body:'Decription'},
    {id:'4', title:'Vue', body:'Decription'}

  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {/* условная отрисовка */}
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Список постов'/>
        : <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
      }
    </div>
  );

}




export default App;
