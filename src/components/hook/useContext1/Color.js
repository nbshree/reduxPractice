import React, { useState , createContext } from 'react';
//===关键代码
export const ColorContext = createContext()

export function Color(props){
    console.log(props.color)
    return (
        <div>
            <ColorContext.Provider value={{color:props.color}}>
                {props.children}
            </ColorContext.Provider>
        </div>
    )
}
