import { render } from "@testing-library/react";
import Index from "../../pages/index";

describe("Index page tests", () => {
  it("should render the UI correctly", () => {
    expect(render(<Index />).asFragment()).toMatchSnapshot();
  });
});
