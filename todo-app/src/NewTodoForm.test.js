import React from "react";
import {render} from "@testing-library/react";
import NewTodoForm from "./NewTodoForm.jsx";
import {addTodo} from "./TodoList.jsx"

// smoke test
it("renders without crashing", () => {
    render(<NewTodoForm addTodo={addTodo} />);
})

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<NewTodoForm addTodo={addTodo} />);
    expect(asFragment()).toMatchSnapshot();
})