import {React, useState} from 'react';
import MyButtton from './UI/Button/MyButtton';
import MyInput from './UI/Input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      } 

    

    return (
        <form>
            {/*Управляемый компонент */}
            <MyInput 
                type='text' placeholder='заголовок' 
                value={post.title} 
                onChange = {e =>{setPost({...post, title: e.target.value})}}
            />
            <MyInput
                type='text' placeholder='пост' 
                value={post.body} 
                onChange = {e =>{setPost({...post, body: e.target.value})}}
            />
            <MyButtton onClick={addNewPost}>gen</MyButtton>
      </form>
    );
};

export default PostForm;