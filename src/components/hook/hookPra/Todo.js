import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
const Todo = (props) => {
    const [status, seStatus] = useState(true);
    useEffect(() => {
        seStatus(props.status)
    }, [])
    const onClick = () => {
        props.onClick();
        seStatus(prevState => {
            return !prevState;
        });
    }
    const delOnClick = (e) => {
        e.stopPropagation();
        props.delOnClick();
    }
    return (
        <li onClick={onClick} style={{color: status ? "black" : "red"}}>
            {props.msg}
            <button onClick={delOnClick}>删除</button>
        </li>
    )
}
Todo.propTypes = {
    status: PropTypes.bool,
    msg: PropTypes.string,
    onClick: PropTypes.func,
    delOnClick: PropTypes.func
}
export default Todo;
