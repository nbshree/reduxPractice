import React, {useContext} from "react";
import {ColorContext} from './Color';

export default function MyButton(prop){
    const {color,dispatch} = useContext(ColorContext);
    return (
        <div>
            <button style={{'background': color === 'yellow' ? "#000" : "#fff"}} onClick={() => {
                dispatch({type:'UPDATE_COLOR',color:"yellow"})
            }}>变黄
            </button>
            <button style={{'background': color === 'red' ?  "#000" : "#fff"}} onClick={() => {
                dispatch({type:'UPDATE_COLOR',color:"red"})
            }}>变红
            </button>
        </div>
    )
};
