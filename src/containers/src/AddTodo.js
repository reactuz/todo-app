import connect from "react-redux/es/connect/connect";
import React from "react";
import { addTodo } from '../../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input
                ref={node => {
                    input = node;
                }}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = "";
                }}
            >
                Add todo
            </button>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export { AddTodo };