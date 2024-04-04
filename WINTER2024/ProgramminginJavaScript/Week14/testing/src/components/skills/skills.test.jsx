import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["FE", "MEAN", "MERN"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument;

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });
});
