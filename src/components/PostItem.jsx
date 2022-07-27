import React from 'react';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{props.key}. {props.post.title}</strong>
                <div>{props.post.title} - {props.post.postText}</div>
            </div>
            <div className='post_btns'>
                <button>delete post</button>
            </div>
        </div>
    );
};

export default PostItem;