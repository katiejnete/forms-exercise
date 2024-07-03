import React from "react";
import {render} from "@testing-library/react";
import NewBoxForm from "./NewBoxForm.jsx";
import {addBox} from "./BoxList.jsx"

// smoke test
it("renders without crashing", () => {
    render(<NewBoxForm addBox={addBox} />);
})

// snapshot test
it("matches snapshot", () => {
    const {asFragment} = render(<NewBoxForm addBox={addBox} />);
    expect(asFragment()).toMatchSnapshot();
})