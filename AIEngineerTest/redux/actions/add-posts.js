import { ADD_POSTS, BASE_URL } from "../constants"

export function addPosts(posts) {
    return {
        type : ADD_POSTS,
        posts
    }
}

export function fetchPosts(pageNo) {
    return (dispatch) => {
        console.log("page number"+pageNo)
        fetch(BASE_URL+pageNo)
        .then((response) => response.json())
        .then(json => {
            console.log("Feched Result is"+ JSON.stringify(json))
            dispatch(addPosts(json))
        })
        .catch(error => {
            console.log("Fetch posts Error"+error)
        })
    }
}