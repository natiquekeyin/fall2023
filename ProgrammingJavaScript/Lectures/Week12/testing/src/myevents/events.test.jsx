import { render, screen } from "@testing-library/react";
import Events from "./Events";
import userEvent from "@testing-library/user-event";

describe("Events testing", () => {
  test("1. renders correctly", () => {
    render(<Events />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const btnIncrement = screen.getByRole("button", { name: "Increment" });
    expect(btnIncrement).toBeInTheDocument();
  });

  test("2.renders a count of 0 in beginning", () => {
    render(<Events />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^0$/);
  });

  test("3.renders a count of 1 after clicking the incrmeent button", async () => {
    // user.setup();
    render(<Events />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
});
