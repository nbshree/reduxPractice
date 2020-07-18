import React from "react";
import {ContentList} from "./ContentList";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const Main = () => {
    return (
        <ContentList>
            <TodoList/>
            <InputTodo/>
        </ContentList>
    )
}
export default Main;
