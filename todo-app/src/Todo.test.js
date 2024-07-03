import React from "react";
import {render} from "@testing-library/react";
import Todo from "./Todo.jsx";
import removeTodo from "./TodoList.jsx"

// smoke test
it("renders without crashing", () => {
    render(<Todo key="ranUuid" id="ranUuid" removeTodo={removeTodo} task="task"/>);
})

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<Todo key="ranUuid" id="ranUuid" removeTodo={removeTodo} task="task"/>);
    expect(asFragment()).toMatchSnapshot();
})