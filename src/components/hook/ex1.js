import React,{useState } from "react";
export default function Ex1() {
    const [msg,setMsg] = useState(123);
    let onClick=()=>{
        setMsg(msg+1);
    }
    return(
        <div>
            <div>{msg}</div>
            <button onClick={onClick}/>
        </div>

    )
}
