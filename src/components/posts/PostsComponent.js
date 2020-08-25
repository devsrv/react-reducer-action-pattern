import React, { useEffect } from 'react';
import { PostsReducer, initialState } from './reducer/Post';
import withAction from '../../hoc/withAction';
import actionCreator from './actions/action';

const ArticleBox = ({id, title, desc, disabled, handleClick}) => (
    <div>
        <h4>{title}</h4>
        <p>{desc}</p>
        <button type="button" onClick={() => handleClick(id)}>Delete Post</button>
    </div>
);

const PostsComponent = (props) => {
    useEffect(() => {
        props.action.fetchAll();
    }, []);

    useEffect(() => {
        console.log(props.state);
    }, [props.state]);

    const handleRemove = (id) => {
        props.action.remove(id);
    }

    return (
        <div>
            {
                props.state.allPosts.map((post, index) => (
                    <ArticleBox 
                        key={post.id} 
                        id={post.id}
                        title={post.title} 
                        desc={post.body} 
                        handleClick={handleRemove}
                    />
                ))
            }
        </div>
    )
};

export default withAction(PostsComponent, actionCreator, {
    reducer: PostsReducer, initialState: initialState
});