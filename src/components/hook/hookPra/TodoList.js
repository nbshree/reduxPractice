import React, {useState, useEffect, useContext} from "react";
import {TodoListContext} from "./ContentList";
import Todo from "./Todo";

const TodoList = () => {
    const {list, setList} = useContext(TodoListContext);

    const onClick = (index) => {
        setList(prevState => {
            prevState[index].status = !prevState[index].status;
            return prevState;
        });
    }
    const delOnClick = (index) => {
        setList(prevState => {
            prevState.splice(index, 1);
            return prevState.slice();
        });
    }
    return (
        <ul>
            {list.map((item, index) =>
                <Todo {...item} key={index} onClick={() => {
                    onClick(index)
                }} delOnClick={() => {
                    delOnClick(index)
                }}/>
            )}
        </ul>
    )
}
export default TodoList;
