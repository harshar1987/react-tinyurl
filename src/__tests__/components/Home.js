
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "../../components/Home";

describe("Movie Cards Home component", () => {

    it("renders without error", () => {
        const app = document.createElement("div");
        ReactDOM.render(<MemoryRouter><Home /></MemoryRouter>, app);
        ReactDOM.unmountComponentAtNode(app);
    });

});

