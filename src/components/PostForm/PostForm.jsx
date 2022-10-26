import {React, useState, useRef} from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const PostForm = ({create}) => {
    const [post, setPost] = useState( {title:'', body:''})

    const addNewPost = (e) => {
        // отключение перезагрузки при нажатии на кнопку
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        // Очистка инпутов
        setPost({title:'', body:''})
      }

    return (
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
    );
};

export default PostForm;