import React from "react";
import { render } from "enzyme";
import Filter from "../../Inputs/Filter/Filter";


describe("<Filter", () => {
  it("/> should render without error", () => {
    render(<Filter />);
  });
});
