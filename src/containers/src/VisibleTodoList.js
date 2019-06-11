import connect from "react-redux/es/connect/connect";
import { TodoList } from '../../components';
import { toggleTodo } from '../../actions';

const getVisibleTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case "SHOW_ALL":
            return todos;

        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);

        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
    }
};

const mapStateToTodoListProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToTodoListProps = dispatch => ({
    onTodoClick: id =>
        dispatch(toggleTodo(id))
});

const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

export { VisibleTodoList };
