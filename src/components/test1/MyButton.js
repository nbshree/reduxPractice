import React, {Component} from "react";

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state={
            color:"yellow"
        }
    }

    changeColor(color){
        this.setState({
            ...this.state,
            color:color
        })
        this.props.changeColor(color);
    }

    render() {
        return (
            <div>
                <button style={{'background':this.state.color==='yellow'?"#fff":"#000"}} onClick={()=>{this.changeColor("yellow")}}>变黄</button>
                <button style={{'background':this.state.color==='red'?"#fff":"#000"}} onClick={()=>{this.changeColor("red")}}>变红</button>
            </div>
        )
    }
}

export default MyButton;
