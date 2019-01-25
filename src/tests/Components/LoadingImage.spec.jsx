import React from "react";
import { render } from "enzyme";
import LoadingImage from "../../Components/LoadingImage";


describe("<LoadingImage", () => {
  it("/> should render without error", () => {
    render(<LoadingImage src="https://placekitten.com/g/1/1" />);
  });
});
