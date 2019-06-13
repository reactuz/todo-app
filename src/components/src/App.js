import React from 'react';
import {AddTodo, VisibleTodoList} from "../../containers";
import {Footer} from "./Footer";

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export { TodoApp };