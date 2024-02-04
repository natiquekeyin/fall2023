import { render, screen } from "@testing-library/react";
import Events from "./Events";
import user from "@testing-library/user-event";

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
    render(<Events />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("4. renders the count value as 3 while use click three times to the increment button", async () => {
    render(<Events />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("3");
  });

  test("5. renders a count of 25 after entering 25 in the textbox and hitting set button", async () => {
    render(<Events />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "25");
    expect(amountInput).toHaveValue(25);

    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent(/^25$/);
  });

  test("6. elements are focused in the proper order", async () => {
    render(<Events />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
