import React from 'react';
import Todo from "./Todo";
import PropTypes from "prop-types";

const TodoList = ({onClick, list}) => (
    <ul>
        {list.map(i =>
            <Todo {...i} key={i.id} onClick={() => onClick(i.id)}/>
        )}
    </ul>
);

TodoList.propTypes = {
    onClick: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
};
export default TodoList;
