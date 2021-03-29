import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
  });

  test("renders the logo, search input, and menu-open-button", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    const logo = screen.getByTitle("rei-search logo");
    const searchInput = screen.getByRole("textbox");
    const menuOpenButton = screen.getByRole("button", { name: "☰" });
    expect(logo).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(menuOpenButton).toBeInTheDocument();
  });
});
