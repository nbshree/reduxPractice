import React, {useState, createContext, useContext} from "react";
import MyButton from "./MyButton";
import Word from "./Word";

export const ColorContext = createContext(undefined, undefined);

export function All() {
    const [color, setColor] = useState("red");
    return (
        <div>
            <ColorContext.Provider value={color}>
                <Word></Word>
                <MyButton changeColor={(color) => setColor(color)}/>
            </ColorContext.Provider>
        </div>
    )
};
