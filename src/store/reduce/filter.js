import {SET_VISIBILITY_FILTER} from "../actionType.";

export default (state="all",action)=>{
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter?action.filter:state;
        default:
            return state;
    }
}
