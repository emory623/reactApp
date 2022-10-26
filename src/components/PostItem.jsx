import React from 'react';
import Button from './UI/Button/Button';

const PostItem = (props) => {
    return (
        <div>
            <div className='post'>
        <div className='post_content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}.
          </div>
        </div>
        <div className='post_btn'>
            <Button onClick={()=>props.remove(props.post)}>Удалить</Button>
        </div>
      </div>
        </div>
    );
};

export default PostItem;