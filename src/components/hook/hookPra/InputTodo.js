import React, {useContext, useRef} from "react";
import {TodoListContext} from "./ContentList";

const InputTodo = () => {
    const {list, setList} = useContext(TodoListContext);
    const myInput = useRef(null)
    const onClick = () => {
        setList(prevState => {
            prevState.push({
                status: true,
                msg: myInput.current.value
            })
            return prevState.slice();
        });

        // let newList = list;
        // newList.push(
        //     {
        //         status: true,
        //         msg: myInput.current.value
        //     })
        // setList(JSON.parse(JSON.stringify(newList)))

        // setList([...list, {status: true, msg: myInput.current.value}]);

    }
    const onClick2 = () => {
        setList([...list, {status: true, msg: myInput.current.value}]);
    }
    return (
        <div>
            <input type="text" ref={myInput}/>
            <button onClick={() => {
                onClick()
            }}>add
            </button>
            <button onClick={() => {
                onClick2()
            }}>add2
            </button>
        </div>
    )
}
export default InputTodo;
