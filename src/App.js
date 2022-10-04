import {React, useState} from 'react';
import PostForm from './components/PostForm';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MySelect from './components/UI/Select/MySelect';

import './styles/App.css';



const App = () => { 

  const [posts, setPosts] = useState( [
    {id:1, title:'JavaScript', body:'язык программирования.'},
    {id:2, title:'React', body:'библиотека JS для создания пользовательских интерфейсов.'},
    {id:3, title:'React Native', body:'фреймворк для разработки нативный мобильных и настольных приложений.'}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [selectedSort, setSelectedSort] = useState('')

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <MySelect
        value={selectedSort}
        onChange={sort=> sortPosts(sort)}
        defaultValue='Сортировка'
        options={[
          {value:'title', name:'По названию'},
          {value:'body', name:'По описанию'}
        ]} 
      />
      {posts
        ? <PostList remove={removePost} posts={posts} title='список постов а'/>
        : <h1 style={{textAlign:'center'}}>здесь пока пусто :(</h1>
      }
    </div>
  );
}




export default App;
