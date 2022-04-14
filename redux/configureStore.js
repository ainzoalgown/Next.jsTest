import {combineReducers, createStore} from '@reduxjs/toolkit'
import {todoReducer} from "./features/reducers/todo";

export const store = createStore(
    combineReducers({
        todos: todoReducer,
    })
);
