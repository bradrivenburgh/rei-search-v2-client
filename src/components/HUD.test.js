import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import HUD from "./HUD";

describe("HUD", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <HUD />
      </BrowserRouter>
    );
  });

  test("HUD is docked to bottom of the screen by default", () => {
    render(
      <BrowserRouter>
        <HUD />
      </BrowserRouter>
    );

    const hudContainer = screen
      .getByRole("button", { name: "▲" })
      .closest("section");
    expect(hudContainer).toHaveStyle({ height: "67px" || "69px" });
  });

  test("HUD has expand and full-screen buttons on app load", () => {
    render(
      <BrowserRouter>
        <HUD />
      </BrowserRouter>
    );

    const fullScreenBtn = screen.getByRole("button", { name: "⛶" });
    const expandBtn = screen.getByRole("button", { name: "▲" });
    expect(fullScreenBtn).toBeInTheDocument();
    expect(expandBtn).toBeInTheDocument();
  });


});
