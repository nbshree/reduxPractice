import {CHANGE_TODO,ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from './actionType.';

let nextId = 0;
export const changeTodo = inputValue => ({
    type:CHANGE_TODO,
    inputValue
});
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextId++,
    text
});
export const toggleTodo = id => {
    console.log(id)
    return {
        type: TOGGLE_TODO,
        id
    }
}
export const setVisibilityFilter = filter => {
    console.log(filter);
    return ({
        type: SET_VISIBILITY_FILTER,
        filter
    })
};
