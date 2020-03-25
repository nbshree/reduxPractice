import {CHANGE_TODO} from "../actionType.";

export default (state="",action)=>{
    switch (action.type) {
        case CHANGE_TODO:
            return action.inputValue;
        default:
            return state;
    }
}
