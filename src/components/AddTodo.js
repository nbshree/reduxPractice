import React from 'react';
import PropTypes from "prop-types";

const AddTodo = ({addChange, addClick}) => {
    let inputValue;
    const getInputValue = (e) => {
        inputValue = e.target.value;
        addChange(e.target.value);
    };
    return (
        <div>
            <input type="text" onChange={(e) => {
                getInputValue(e)
            }}/>
            <button onClick={() => {
                addClick(inputValue)
            }}/>
        </div>
    );
};
AddTodo.propTypes = {
    addChange: PropTypes.func.isRequired,
    addClick: PropTypes.func.isRequired,
};
export default AddTodo;
