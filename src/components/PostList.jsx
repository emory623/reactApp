import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup , CSSTransition} from 'react-transition-group';

const PostList = ({title,posts,remove}) => {
    if( !posts.length){
        return <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition 
                        timeout={500}
                        key={post.id}
                        className="post"
                    >
                        <PostItem remove={remove} number={index+1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;