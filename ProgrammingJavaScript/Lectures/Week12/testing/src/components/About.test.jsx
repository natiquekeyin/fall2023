import { render, screen } from "@testing-library/react";
import About from "./About";

describe("Forms testing", () => {
  test("testing whether keyin college is there", () => {
    render(<About />);
    const linkElement = screen.getByText(/keyin college/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Testing input box", () => {
    render(<About />);
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
  });

  test.skip("Testing check box", () => {
    render(<About />);
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();
  });
});
