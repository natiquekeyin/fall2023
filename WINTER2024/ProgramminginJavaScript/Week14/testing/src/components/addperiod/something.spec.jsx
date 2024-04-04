import { render, screen } from "@testing-library/react";
import AddPeriod from "./AddPeriod";

test("Add period renders correctly", () => {
  render(<AddPeriod />);
  const textElement = screen.getByText("Add Period");
  expect(textElement).toBeInTheDocument();
});
