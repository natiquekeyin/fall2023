import { render, screen } from "@testing-library/react";
import About from "./About";

test("testing whether keyin college is there", () => {
  render(<About />);
  const linkElement = screen.getByText(/keyin college/i);
  expect(linkElement).toBeInTheDocument();
});
