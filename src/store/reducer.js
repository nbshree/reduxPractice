const defaultState = {
    inputValue: "plz input",
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_input_value': {
            return {
                ...state,
                inputValue: action.value
            };
        }
        case 'addItem':{
            return {
                ...state,
                list: [...state.list,state.inputValue]
            };
        }
        case 'getList':{
            let newState = JSON.parse(JSON.stringify(state));
            newState.list = action.data.data.list; //复制性的List数组进去
            return newState;
        }
        default:{
            break;
        }
    }
    return state
}
