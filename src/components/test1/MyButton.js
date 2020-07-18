import React, {Component} from "react";

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "msg",
            color: "yellow"
        }
    }

    changeColor(color) {
        this.setState({
            // ...this.state,
            color: color
        })
        this.props.changeColor(color);
    }

    coClick() {
        this.setState(prevState => {
            console.log(prevState)
                return prevState.msg === "msg" ? {msg: "msg1"} : {msg: "msg"}
                // return {...prevState,msg: "msg1"}
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.coClick()}}>on</button>
                <div>{this.state.msg}</div>
                <button style={{'background': this.state.color === 'yellow' ? "#fff" : "#000"}} onClick={() => {
                    this.changeColor("yellow")
                }}>变黄
                </button>
                <button style={{'background': this.state.color === 'red' ? "#fff" : "#000"}} onClick={() => {
                    this.changeColor("red")
                }}>变红
                </button>
            </div>
        )
    }
}

export default MyButton;
