import React,{useState ,useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Index() {
    useEffect(()=>{
        console.log('进来了')
        return ()=>{
            console.log("走了")
        }
    })
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(()=>{
        console.log('进来了')
        return ()=>{
            console.log("走了")
        }
    })
    return <h2>List-Page</h2>;
}
export default function Ex2() {
    const [msg,setMsg] = useState(123);
    let onClick=()=>{
        setMsg(msg+1);
    }
    useEffect(()=>{
        console.log('进来了')
        return ()=>{
            console.log("走了")
        }
    })
    return(
        <div>
            <div>{msg}</div>
            <button onClick={onClick}/>
            <Router>
                <ul>
                    <li><Link to="/">index</Link></li>
                    <li><Link to="/list">list</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>

    )
}
