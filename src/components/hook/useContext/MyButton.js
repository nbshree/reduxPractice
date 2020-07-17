import React, {useContext} from "react";
import {ColorContext} from './All';

export default function MyButton(prop){
    const color = useContext(ColorContext);
    return (
        <div>
            <button style={{'background': color === 'yellow' ? "#000" : "#fff"}} onClick={() => {
                prop.changeColor("yellow")
            }}>变黄
            </button>
            <button style={{'background': color === 'red' ?  "#000" : "#fff"}} onClick={() => {
                prop.changeColor("red")
            }}>变红
            </button>
        </div>
    )
};
