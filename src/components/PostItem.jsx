import React from 'react';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{props.id}. {props.postHeader}</strong>
                <div>{props.postHeader} - {props.postText}</div>
            </div>
            <div className='post_btns'>
                <button>delete post</button>
            </div>
        </div>
    );
};

export default PostItem;