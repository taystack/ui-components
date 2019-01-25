import React from "react";
import { render } from "enzyme";
import Checkbox from "../../Inputs/Checkbox";


describe("<Checkbox", () => {
  it("/> should render without error", () => {
    render(<Checkbox id="id" />);
  });
});
