
import React, { useState, useEffect } from "react";
import App from "./App";
let timer = null;
function Apps() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = "componentDidMount" + count;
    },[count]);

    useEffect(() => {
        timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => {
            document.title = "componentWillUnmount";
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            Count: {count}
            <button onClick={() => clearInterval(timer)}>clear</button>
        </div>
    );
}
export default Apps;
