import {React, useState, useMemo} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm/PostForm';
import MySelect from './components/UI/Select/MySelect';
import MyInput from './components/UI/MyInput/MyInput'



const App = () => { 

  const [posts, setPosts] = useState([
    {id:'1', title:'Python', body:'Decriptiona'},
    {id:'2', title:'JavaScript', body:'Decriptionb'},
    {id:'3', title:'React', body:'Decription'},
    {id:'4', title:'Vue', body:'Decription'}

  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')


  const sortedPosts = useMemo(() => {
    console.log("welldone")
    if(selectedSort){
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo( ()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <MyInput
          value = {searchQuery}
          onChange = {e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
        <MySelect 
          onChange={sortPosts} 
          value={selectedSort} 
          defaultValue='Сортировка' 
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name:'По описанию'}
          ]}
        />
      </div>
      {/* условная отрисовка */}
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
        : <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
      }
    </div>
  );

}


export default App;
