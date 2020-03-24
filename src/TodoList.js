import 'antd/dist/antd.css';
import React, {Component} from 'react';
import {Input, Button, List} from 'antd';
import { connect } from 'react-redux';
import store from './store/index'
import {changeInputAction, getTodoList} from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
        const changeInputValue = this.props.changeInputValue;
        console.log(this.state)
        // this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this); //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    storeChange() {
        this.setState(store.getState());
    }
    //
    // componentDidMount() {
    //     const action = getTodoList();
    //     store.dispatch(action)
    // }

    render() {
        return (
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} style={{width: '250px'}}
                           onChange={this.changeInputValue}/>
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{margin: '10px', width: '300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }

    // changeInputValue(e) {
    //     // const action ={
    //     //     type:'change_input_value',
    //     //     value:e.target.value
    //     // };
    //     const action = changeInputAction(e.target.value)
    //
    //     store.dispatch(action);
    //
    // }

    clickBtn() {
        const action = {type: 'addItem'};
        store.dispatch(action)
        console.log(store.getState())
    }
}
function mapStateToProps(state, ownProps) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        ...getTodoList(dispatch),
        changeInputValue: (e) => dispatch(changeInputAction(e.target.value))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
