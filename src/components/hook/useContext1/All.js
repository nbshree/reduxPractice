import React, {useState, createContext, useContext} from "react";
import MyButton from "./MyButton";
import Word from "./Word";
import {Color} from "./Color";
export function All() {
    return (
        <div>
            <Color>
                <Word></Word>
                <MyButton/>
            </Color>
        </div>
    )
};
