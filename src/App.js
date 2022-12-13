import {React, useState, useMemo} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/MyButton/MyButton';
import { usePosts } from './hooks/usePosts';



const App = () => { 

  const [posts, setPosts] = useState([
    {id:'1', title:'Python', body:'Decriptiona'},
    {id:'2', title:'JavaScript', body:'Decriptionb'},
    {id:'3', title:'React', body:'Decription'},
    {id:'4', title:'Vue', body:'Decription'}

  ])

  const [modal, setModal] = useState(false)

  const [filter, setFilter] = useState({sort:'', query: ''})

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop:'30px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
    </div>
  );

}


export default App;
