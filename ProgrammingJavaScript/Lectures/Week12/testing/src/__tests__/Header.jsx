import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("My first test", () => {
  render(<Header />);
  const linkElement = screen.getByText(/keyin college/i);
  expect(linkElement).toBeInTheDocument();
});
