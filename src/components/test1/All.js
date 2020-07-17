import React, {Component} from "react";
import Word from "./Word";
import MyButton from "./MyButton";
class All extends Component {
    constructor(props) {
        super(props);
    }

    changeColor(color){
        this.child.changWord(color);
    }
    onRef = (ref) => {
        this.child = ref
    }

    render() {
        return (
            <div>
                <Word onRef={this.onRef}/>
                <MyButton changeColor={(color) => this.changeColor(color)}/>
            </div>
        )
    }
}

export default All;
