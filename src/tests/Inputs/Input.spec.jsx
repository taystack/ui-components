import React from "react";
import { render } from "enzyme";
import Input from "../../Inputs/Input";


describe("<Input", () => {
  it("/> should render without error", () => {
    render(<Input />);
  });
});
