import TodoList from "../components/TodoList";
import {connect} from 'react-redux';
import {toggleTodo} from '../store/aciton'

const getList = (list, filterType) => {
    switch (filterType) {
        case "all":
            return list;
        case "completed":
            return list.filter(t => t.completed);
        case "active":
            return list.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filterType)
    }
};

function mapStateToProps(state) {
    return {
        list: getList(state.list, state.filters)
    };
}

const mapDispatchToProps = dispatch => ({
    onClick: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
