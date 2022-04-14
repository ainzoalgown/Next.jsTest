import {types} from "../types/todo";

const initialState = {
    items: [
        {
            id: 1,
            title: 'Купить хлеб',
        },
        {
            id: 2,
            title: 'Купить сок',
        },
    ],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_TODO:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }
        case types.ADD_TODO:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case types.REDACT_TODO:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            ...action.payload
                        }
                    }
                    return item
                })
            }
        default:
            return state
    }
}
