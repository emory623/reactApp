import React from 'react';
import MyButtton from './UI/Button/MyButtton'

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.title} - {props.post.postText}</div>
            </div>
            <div className='post_btns'>
                <MyButtton onClick={()=> props.remove(props.post)}>delete</MyButtton>
            </div>
        </div>
    );
};

export default PostItem;