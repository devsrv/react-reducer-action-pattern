import React, { useEffect, useReducer } from 'react';
import { PostsReducer, initialState } from './../reducer/Post';

const MyComponent = () => {
    const [state, dispatch] = useReducer(PostsReducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((res) => dispatch({type: 'SET_POSTS', payload: {posts: res}}));
    }, []);

    const handleClick = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        }).then(() => {
            dispatch({type: 'REMOVE_POST', payload: {id: id}});
        });
    }

    return (
        <div>
            {
                state.allPosts.map((post, index) => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <button type="button" onClick={() => handleClick(post.id)}>Delete Post</button>
                    </div>
                ))
            }
        </div>
    )
};

export default MyComponent;