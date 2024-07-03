import React from "react";
import {render} from "@testing-library/react";
import Box from "./Box.jsx";
import {deleteBox} from "./BoxList.jsx";

// smoke test
it("renders without crashing", () => {
    render(<Box id="randomId" backgroundColor="black" width={50} height={50} deleteBox={deleteBox}/>);
})

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<Box id="randomId" backgroundColor="black" width={50} height={50} deleteBox={deleteBox}/>);
    expect(asFragment()).toMatchSnapshot();
})