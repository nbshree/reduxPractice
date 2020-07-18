import React,{useState,createContext} from "react";
export const TodoListContext = createContext();
export const ContentList = (props)=>{
    const [list,setList] = useState([{status:true,msg:"1"},{status:true,msg:"12"}]);
    return(
        <TodoListContext.Provider value={{list, setList}}>
            {props.children}
        </TodoListContext.Provider>
    )
}
