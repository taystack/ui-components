import React from "react";
import { render } from "enzyme";
import Carousel from "../../Cards/Carousel";


describe("<Carousel", () => {
  it("/> should render without error", () => {
    render(<Carousel>
      <div></div>
      <div></div>
    </Carousel>);
  });
});
