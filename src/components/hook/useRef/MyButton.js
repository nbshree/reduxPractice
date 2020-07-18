import React, {Component, useEffect, useState} from "react";

export default function MyButton(props) {
    const {label, myRef} = props;
    console.log(myRef)
    const [colorState, setColor] = useState("yellow");

    // useEffect(()=>{
    //     setColor(color)
    // },[])
    // function changeColor(color) {
    //     setColor(color);
    // }

    return (
        <div>
            <span>{label}:</span>
            <input type="text" ref={myRef} />
            {/*<button style={{'background': color === 'yellow' ? "#fff" : "#000"}} onClick={() => {*/}
            {/*    changeColor("yellow")*/}
            {/*}}>变黄*/}
            {/*</button>*/}
            {/*<button style={{'background': color === 'red' ? "#fff" : "#000"}} onClick={() => {*/}
            {/*    changeColor("red")*/}
            {/*}}>变红*/}
            {/*</button>*/}
        </div>
    )
};
