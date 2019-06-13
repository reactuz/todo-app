import React from 'react';
import {TodoApp} from "./App";
import Provider from "react-redux/es/components/Provider";

const Root = ({ store }) => (
    <Provider store={store}>
        <TodoApp />
    </Provider>
);

export { Root };