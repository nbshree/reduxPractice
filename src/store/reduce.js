import {CHANGE_TODO,ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from './actionType.';

const states = {
    inputValue:"",
    filters: "all",
    list: []
};
export default (state = states, action) => {
    switch (action.type) {
        case CHANGE_TODO:
            return {
                ...state,
                inputValue: action.inputValue
            };
        case ADD_TODO:
            return {
                ...state,
                list: [...state.list, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                // list: state.list.map(i => {
                //     if (i.id === action.id) {
                //         i.completed = !i.completed;
                //     }
                // })
                list: state.list.map(todo =>
                    (todo.id === action.id)
                        ? {...todo, completed: !todo.completed}
                        : todo
                )
            };
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                filters: action.filter
            };
        default:
            return state;
    }
}
