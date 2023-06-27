import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders button group correctly", () => {
  render(<App />);

  expect(
    screen.getByRole("button", { name: "Bookmarked" })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Applying" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Applied" })).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Interviewing" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Negotiating" })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Accepted" })).toBeInTheDocument();
});

test("clicking a button makes its filter active and changes its background", () => {
    render(<App />);
    const bookmarkedButton = screen.getByRole('button', { name: 'Bookmarked' });
  
    expect(bookmarkedButton.classList.contains('active')).toBe(false);
    fireEvent.click(bookmarkedButton);
  
    expect(bookmarkedButton.classList.contains('active')).toBe(true);
  });
