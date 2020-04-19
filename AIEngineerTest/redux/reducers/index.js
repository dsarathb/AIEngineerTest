import React from "react"

import { combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { addPostsReducer } from "./add-posts-reducer"

const RootReducer = combineReducers({
    posts : addPostsReducer
})

export default RootReducer