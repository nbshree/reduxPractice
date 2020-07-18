import React, {Component,useRef} from "react";
import Word from "./Word";
import MyButton from "./MyButton";
import MyButtonRef from "./MyButtonRef";

export default function All(){
    // const wordEl =  useRef()
    const myRef = useRef(null)
    // function changeColor(color){
    //     wordEl.current.changWord(color);
    // }
    // const handleFocus = () => {
    //     const node = myRef.current
    //     console.log(node)
    //     node.focus()
    // }
    return (
        <div>
            {/*<Word ref={wordEl}/>*/}
            {/*<MyButton changeColor={(color) => changeColor(color)}/>*/}
            <MyButtonRef label={"姓名"} ref={myRef}/>
            <button onClick={()=>{myRef.current.focus()}}>focus</button>
        </div>
    )
};
