import {React, useState} from 'react';
import './styles/App.css';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import PostItem from './components/PostItem';
import PostList from './components/PostList';



const App = () => { 

  const [posts, setPosts] = useState([
    {id:'1', title:'Python', body:'Decription'},
    {id:'2', title:'JavaScript', body:'Decription'},
    {id:'3', title:'React', body:'Decription'},
    {id:'4', title:'Vue', body:'Decription'}

  ])

  return (
    <div className="App">
      <PostList posts={posts} title='Список постов'/>
    </div>
  );

}




export default App;
