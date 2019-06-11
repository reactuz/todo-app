import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { AddTodo, VisibleTodoList } from "./containers";
import { Footer } from './components';
import todoApp from './reducers';

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

render(
    <Provider store={ createStore(todoApp) }>
        <TodoApp />
    </Provider>,
    document.getElementById("root")
);