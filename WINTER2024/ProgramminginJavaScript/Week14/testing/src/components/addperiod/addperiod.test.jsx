import { render, screen } from "@testing-library/react";
import AddPeriod from "./AddPeriod";

describe("Period", () => {
  test("Add period renders correctly", () => {
    render(<AddPeriod />);
    const textElement = screen.getByText("Add Period");
    expect(textElement).toBeInTheDocument();
  });

  test("Add Period with name and Period", () => {
    render(<AddPeriod name="Alex" />);
    const textElement = screen.getByRole("Hello Alex.");
    expect(textElement).toBeInTheDocument();
  });
});
