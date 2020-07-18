import React, {Component, forwardRef, useImperativeHandle, useRef} from "react";
import MyButton from "./MyButton";

export default forwardRef((props, ref) => {
    const myRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            myRef.current.focus()
        }
    }))
    return (
        <MyButton {...props} myRef={myRef}/>
    )
})
// const RefInput = React.forwardRef((props, ref) => {
//     <MyButton {...props} myRef={ref}/>
// })
