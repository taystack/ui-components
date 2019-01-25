import React from "react";
import { render } from "enzyme";
import HopCard from "../../Cards/HopCard";


describe("<HopCard", () => {
  it("/> should render without error", () => {
    render(<HopCard />);
  });
});
