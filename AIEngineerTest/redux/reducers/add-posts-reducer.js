import { ADD_POSTS } from "../constants"

const INITIAL_STATE = {
    posts: [],
    pageNo: 0
}

export function addPostsReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case ADD_POSTS :
            return {
                ...state,
                posts : [...state.posts, ...action.posts.hits],
                pageNo : action.posts.page + 1
            }
        default :
          return {
              ...state
          }
    }
}