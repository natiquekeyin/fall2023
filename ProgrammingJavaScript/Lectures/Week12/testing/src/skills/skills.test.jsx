import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills Tests", () => {
  const skills = ["Programming", "Swimming", "Cycling"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(3);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Log In" });
    expect(loginButton).toBeInTheDocument();
  });

  test("logged in button is not rendered", () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const loggedInButton = screen.queryByRole("button", { name: "Logged In" });
    expect(loggedInButton).not.toBeInTheDocument();
  });

  test("loggedin eventuall appears", async () => {
    render(<Skills skills={skills} />);
    const loggedInButton2 = await screen.findByRole(
      "button",
      {
        name: "Logged In",
      },
      { timeout: 2000 }
    );
    expect(loggedInButton2).toBeInTheDocument();
  });
});
