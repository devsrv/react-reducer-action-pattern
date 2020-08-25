import { REMOVE_POST, SET_POSTS } from './../actions/actionType';

export const initialState = {
    allPosts: [],
};

export function PostsReducer(prevState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...prevState,
                allPosts: action.payload.posts,
            };
        case REMOVE_POST:
            const postIndex = prevState.allPosts.findIndex(p => p.id === Number(action.payload.id));
            
            return {
                ...prevState,
                allPosts: [...prevState.allPosts.slice(0, postIndex), ...prevState.allPosts.slice(postIndex + 1)]
            };
        default:
            return {
                ...prevState,
            };
    }
}
