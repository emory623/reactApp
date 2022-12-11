import {React, useState, useMemo} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter';



const App = () => { 

  const [posts, setPosts] = useState([
    {id:'1', title:'Python', body:'Decriptiona'},
    {id:'2', title:'JavaScript', body:'Decriptionb'},
    {id:'3', title:'React', body:'Decription'},
    {id:'4', title:'Vue', body:'Decription'}

  ])

  const [filter, setFilter] = useState({sort:'', query: ''})


  const sortedPosts = useMemo(() => {
    console.log("welldone")
    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo( ()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
    </div>
  );

}


export default App;
