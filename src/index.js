import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import { TodoApp } from './components';
import todoApp from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));


render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById("root")
);