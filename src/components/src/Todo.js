import React from "react";

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            cursor: "pointer",
            textDecoration: completed
                ? "line-through"
                : "none"
        }}
    >
        {text}
    </li>
);

export { Todo };