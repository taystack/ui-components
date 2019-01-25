import React from "react";
import { render } from "enzyme";
import PolarGraph from "../../Graphs/Polar";


describe("<PolarGraph", () => {
  it("/> should render without error", () => {
    render(<PolarGraph data={[]} labels={[]} />);
  });
});
