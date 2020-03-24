import React, {Component} from 'react';
import AddTodoCon from "../containers/AddTodoCon";
import TodoListCon from "../containers/TodoListCon";
import SelectFilterCon from "../containers/SelectFilterCon";
class App extends Component {
    render() {
        return (
            <div>
                <AddTodoCon/>
                <TodoListCon/>
                <SelectFilterCon/>
            </div>
        );
    }
}

export default App;
