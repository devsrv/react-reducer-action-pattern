import { REMOVE_POST, SET_POSTS } from './actionType';

const action = (state, dispatch) => {
    return {
        fetchAll: () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((res) => dispatch({type: SET_POSTS, payload: {posts: res}}));
        },
        remove: (id) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            }).then(() => {
                dispatch({type: REMOVE_POST, payload: {id: id}});
            });
        }
    }
};

export default action;