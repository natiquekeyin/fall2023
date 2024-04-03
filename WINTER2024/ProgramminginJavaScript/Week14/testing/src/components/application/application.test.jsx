import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();
  });
});
