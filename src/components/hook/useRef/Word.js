import React, {Component} from 'react';

class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:"blue"
        };
    }
    changWord(color){
        this.setState(
            {
                ...this.state,
                color:color
            }
        )
    }
    // componentDidMount(){
    //     this.props.onRef(this)
    // }



    render() {
        return (<div style={{'color':this.state.color}}>666</div>)
    }
}
export default Word;
