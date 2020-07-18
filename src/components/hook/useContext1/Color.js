import React, {useState, createContext, useReducer} from 'react';
//===关键代码
export const ColorContext = createContext()

export function Color(props) {
    const [color,dispatch] = useReducer((state,action) => {
        switch (action.type) {
            case 'UPDATE_COLOR':
                return action.color;
            default:
                return state;
        }
    },"black")
    console.log(props.color)
    return (
        <div>
            <ColorContext.Provider value={{color, dispatch}}>
                {props.children}
            </ColorContext.Provider>
        </div>
    )
}
