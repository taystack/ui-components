import React from "react";
import { render } from "enzyme";
import ShowcaseCard from "../../Cards/ShowcaseCard";


describe("<ShowcaseCard", () => {
  it("/> should render without error", () => {
    render(<ShowcaseCard />);
  });
});
