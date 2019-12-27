export const changeInputAction = (value) => ({
    type: 'change_input_value',
    value
});

export const addItemAction = () => ({
    type: 'addItem'
});

// export const deleteItemAction = (index)=>({
//     type:DELETE_ITEM,
//     index
// })
export const getListAction = (data) => ({
    type: 'getList',
    data
});
export const getTodoList = () => {
    return (dispatch) => {
        const data = {
            data: {
                list: [
                    '1',
                    '2',
                    '晚5:30对今日代码进行review'
                ]
            }
        };
        const action = getListAction(data);
        dispatch(action)

    }
}
