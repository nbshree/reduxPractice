import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Todo extends Component {
    constructor(props) {
        console.log(props)
        super(props);
    }
    render() {
        return (
            <li onClick={this.props.onClick}     style={{
                textDecoration: this.props.completed ? 'line-through' : 'none'
            }}>
                {this.props.text}
            </li>
        );
    }
}
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};
export default Todo;

// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
// const Todo = ({completed, test, onClick}) => (
//     <li onClick={onClick} style={{
//         textDecoration: completed ? 'line-through' : 'none'
//     }}>
//         {test}
//     </li>
// )
//
// Todo.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
// };
// export default Todo;

