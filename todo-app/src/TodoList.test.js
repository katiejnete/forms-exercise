import React from "react";
import {render, screen, act, fireEvent} from "@testing-library/react";
import TodoList from "./TodoList.jsx";
import "@testing-library/jest-dom";

// smoke test
it("renders without crashing", () => {
    render(<TodoList/>);
})

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
})

it("can add new todo", async function() {
    render(<TodoList/>);

    const taskInput = screen.getByPlaceholderText("Task Name");
    const submitBtn = screen.getByRole('button', {name: /Submit/});

    await act(async () => {
        fireEvent.change(taskInput, {target: {value: 'task'}});
        fireEvent.click(submitBtn);
    });

    const divElement = screen.getByTestId('task');
    expect(divElement).toBeInTheDocument();
});