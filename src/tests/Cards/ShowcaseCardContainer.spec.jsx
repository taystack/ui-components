import React from "react";
import { render } from "enzyme";
import ShowcaseCardContainer, {
  ShowcaseCardContainerError,
} from "../../Cards/ShowcaseCardContainer";


describe("ShowcaseCardContainer", () => {
  it("should render without error", () => {
    render(<ShowcaseCardContainer row />);
  });

  it("should require row or error", () => {
    expect(() => {
      render(<ShowcaseCardContainer />);
    }).toThrow(ShowcaseCardContainerError);
  });
});
