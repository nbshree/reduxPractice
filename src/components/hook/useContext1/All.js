import React, {useState, createContext, useContext} from "react";
import MyButton from "./MyButton";
import Word from "./Word";
import {Color} from "./Color";
export function All() {
    const [color, setColor] = useState("red");
    return (
        <div>
            <Color color={color}>
                <Word></Word>
                <MyButton changeColor={(color) => setColor(color)}/>
            </Color>
        </div>
    )
};
