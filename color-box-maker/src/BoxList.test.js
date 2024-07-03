import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import BoxList from "./BoxList.jsx";
import "@testing-library/jest-dom";

// smoke test
it("renders without crashing", () => {
  render(<BoxList />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add new box", async function() {
    render(<BoxList/>);

    const colorInput = screen.getByLabelText("Background color:");
    const widthInput = screen.getByLabelText("Width:");
    const heightInput = screen.getByLabelText("Height:");
    const addBtn = screen.getByRole('button', {name: /Add box/});

    await act(async () => {
        fireEvent.change(colorInput, {target: {value: 'black'}});
        fireEvent.change(widthInput, {target: {value: 50}});
        fireEvent.change(heightInput, {target: {value: 50}});
        fireEvent.click(addBtn);
        
    });

    const boxElement = screen.getByTestId('box');
    expect(boxElement).toBeInTheDocument();
});
