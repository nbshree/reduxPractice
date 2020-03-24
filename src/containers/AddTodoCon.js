import {connect} from 'react-redux';
import AddTodo from "../components/AddTodo";
import {changeTodo,addTodo} from "../store/aciton";


const mapDispatchToProps = (dispatch) => ({
    addChange: inputValue => dispatch(changeTodo(inputValue)),
    addClick:inputValue => dispatch(addTodo(inputValue))
});
export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
