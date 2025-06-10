import { render, screen } from "@testing-library/react";
import ExamplePage from "../pages/example";

describe("ExamplePage", () => {
  it("renders post content", () => {
    const mockPost = {
      title: "Mock Title",
      body: "Mock Body",
    };

    render(<ExamplePage post={mockPost} />);

    expect(screen.getByTestId("title")).toHaveTextContent("Mock Title");
    expect(screen.getByTestId("body")).toHaveTextContent("Mock Body");
  });
});
