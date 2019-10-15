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
            }
        }
        case 'addItem':{
            return {
                ...state,
                list: [...state.list,state.inputValue]
            }
        }
    }
    return state
}
