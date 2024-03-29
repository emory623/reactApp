import {React, useState, useEffect} from 'react';
import '../styles/App.css';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/MyButton/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';


const Posts = () => { 

  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [filter, setFilter] = useState({sort:'', query: ''})
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostLoading, postError] = useFetching( async(limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit))
  }) 

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>GET</MyButton>
      <MyButton style={{marginTop:'30px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <h1 style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>Ошибка: ${postError}</h1> 
      }
      {isPostLoading 
        ? <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
      }
      <Pagination 
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
      
    </div>
  );

}


export default Posts;
