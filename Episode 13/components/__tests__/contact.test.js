import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load Contact Us page", () => {
  render(<Contact />);

  const heading = screen.findByRole("heading");
  //assertion
  expect(heading).toBeInTheDocument;
});
