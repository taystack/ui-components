import React from "react";
import { render } from "enzyme";
import CardContainer from "../../Cards/CardContainer";


describe("<CardContainer", () => {
  it("/> should render {row} without error", () => {
    render(<CardContainer row />);
  });
});
